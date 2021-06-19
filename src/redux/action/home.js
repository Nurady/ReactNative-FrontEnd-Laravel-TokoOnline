import axios from "axios"
import { API_HOST } from "../../config";
// import { setLoading } from './global';

export const getFoodData = () => (dispatch) => {
    // dispatch(setLoading(true));
    axios.get(`${API_HOST.url}/food`)
        .then(res => {
            // console.log('list : ', res.data.data.data);
            // dispatch(setLoading(false));
            dispatch({type: 'SET_FOOD', value: res.data.data.data})
        })
        .catch(err => {
            // dispatch(setLoading(false));
            console.log('err: ', err);
        });
};

export const getFoodDataByType = (types) => (dispatch) => {
    // dispatch(setLoading(true));
    axios.get(`${API_HOST.url}/food?types=${types}`)
        .then(res => {
            // console.log('list : ', res.data.data.data);
            if(types === 'new_food') {
                // dispatch(setLoading(false));
                dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data})
            }  
            if(types === 'popular') {
                // dispatch(setLoading(false));
                dispatch({type: 'SET_POPULAR', value: res.data.data.data})
            }
            if(types === 'recommended') {
                // dispatch(setLoading(false));
                dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data})
            }          
        })
        .catch(err => {
            console.log('err: ', err);
            // dispatch(setLoading(false));
        });
};
