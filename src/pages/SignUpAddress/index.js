import axios from 'axios';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Header, TextInput, Gap, Button, Select } from '../../components';
import { setLoading, signUpAction } from '../../redux/action';
import { useForm, showMessage } from '../../utils';
// import { showMessage, hideMessage } from "react-native-flash-message";

const SignUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Bandung',
      });

    const dispatch = useDispatch();
    const {registerReducer, photoReducer }= useSelector((state) => state);
    
    const onSubmit = () => {
        // event.preventDefault();
        const data = {
            ...form,
            ...registerReducer,
        };
        
        // console.log('Data Register: ', data);
        dispatch(setLoading(true));
        dispatch(signUpAction(data, photoReducer, navigation));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow:1 }}>
        <View style = {styles.page}>
            <Header 
                title="Address" 
                subTitle="Make Sure is Valid" 
                onBack={() => navigation.goBack()}
            />
            <View style = {styles.container}>  
                <Gap height={24} />           
                <TextInput 
                    label="Phone Number" 
                    placeholder="Nomor HP" 
                    value={form.phoneNumber}
                    onChangeText={(value) => setForm('phoneNumber', value)} 
                />
                <Gap height={16} />
                <TextInput 
                    label="Address" 
                    placeholder="Alamat Lengkap Anda" 
                    value={form.address}
                    onChangeText={(value) => setForm('address', value)} 
                />
                <Gap height={16} />
                <TextInput 
                    label="House Number" 
                    placeholder="Nomor Rumah" 
                    value={form.houseNumber}
                    onChangeText={(value) => setForm('houseNumber', value)} 
                />   
                <Gap height={16} />
                <Select 
                    label="Kota"
                    value={form.city}
                    onSelectChange={(value) => setForm('city', value)}
                />
                <Gap height={24} />         
                <Button 
                    text="Sign Up Now" 
                    onPress={onSubmit}
                /> 
            </View>
        </View>
    </ScrollView>
    )
}

export default SignUpAddress;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        marginTop:24,
        flex: 1
    }
});

// axios.post('http://10.0.2.2:8000/api/register', data)
        //     .then((res) => {
        //         console.log('success signup:', res.data);
        //         if(photoReducer.isUploadPhoto) {
        //             const photoForUpload = new FormData();
        //             photoForUpload.append('file', photoReducer);

        //             axios.post('http://10.0.2.2:8000/api/user/photo', 
        //                 photoForUpload,
        //                 {
        //                     headers: {
        //                         'Authorization' : `${res.data.data.token_type} ${res.data.data.access_token}`,
        //                         'Content-Type' : 'multipart/form-data'
        //                     }
        //                 })
        //                 .then(resUpload => {
        //                     console.log('resUpload:', resUpload);
        //                 })
        //                 .catch(err => {
        //                     showMessage('Upload Photo Tidak Berhasil')
        //                 })
        //         }
        //         dispatch(setLoading(false));
        //         navigation.replace('SuccessSignUp');
        //         showMessage('Registrasi Berhasil', 'success');   
        //     })
        //     .catch((err) => {
        //         console.log('error signup: ', err.response.data.data.message);
        //         dispatch(setLoading(false));
        //         showMessage(err?.response?.data?.data?.message);
        //     });
