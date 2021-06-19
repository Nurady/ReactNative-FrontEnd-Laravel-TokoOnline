import axios from 'axios';
import { API_HOST } from '../../config';
import { showMessage, storeData } from '../../utils';
import { setLoading } from './global';

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
            .then((res) => {
                const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
                // console.log(token);
                const profile = res.data.data.user;                
                
                storeData('token', { value: token });
                if(photoReducer.isUploadPhoto) {
                    const photoForUpload = new FormData();
                    photoForUpload.append('file', photoReducer);

                    axios.post(`${API_HOST.url}/user/photo`, 
                        photoForUpload,
                        {
                            headers: {
                                Authorization : token,
                                'Content-Type' : 'multipart/form-data'
                            },
                        })
                        .then(resUpload => {
                            profile.profile_photo_url = `https://startup-backend.nursyafriady.site/storage/${resUpload.data.data[0]}`;
                            // profile.profile_photo_url = `http://10.0.2.2:8000/storage/${resUpload.data.data[0]}`;
                            // console.log(profile.profile_photo_url);
                            storeData('userProfile', profile);
                            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
                        })
                        .catch(()=> {
                            showMessage('Upload Photo Tidak Berhasil');
                            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
                        });
                } else {
                    storeData('userProfile', profile);
                    navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
                }

                dispatch(setLoading(false));                 
            })
            .catch((err) => {
                // console.log('error signup: ', err.response.data.data.message);
                dispatch(setLoading(false));
                showMessage(err?.response?.data?.data?.message);
            });
};

export const signInAction = (form, navigation) => (dispatch) => {
    // console.log('form: ', form);
    dispatch(setLoading(true));
    axios.post(`${API_HOST.url}/login`, form)
        .then((res) => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            const profile = res.data.data.user;

            dispatch(setLoading(false));
            storeData('token', { value: token });
            storeData('userProfile', profile);            
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});            
        })
        .catch(err => {
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.data?.message);
        });
};
