import axios from "axios";
import { API_HOST } from "../../config";
import { getData } from "../../utils";
import { setLoading } from './global';

export const getOrders = () => (dispatch) => {
    getData('token')
        .then(resToken=> {
          dispatch(setLoading(true));
          axios.get(`${API_HOST.url}/transaction`, {
                headers: {
                    Authorization: resToken.value
                }
            })
            .then(res=> {
                // console.log('get orders: ', res.data.data.data);
                dispatch(setLoading(false));
                dispatch({
                    type: 'SET_ORDER',
                    value: res.data.data.data,
                });
            })
            .catch(err=> {
                dispatch(setLoading(false));
                console.log('error orders: ', err.response);
            })
        }) 
};

export const getInProgress = () => (dispatch) => {
    getData('token')
        .then(resToken=> {
            dispatch(setLoading(true));
            axios.all([
                axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
                    headers: {
                        Authorization: resToken.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
                    headers: {
                        Authorization: resToken.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
                    headers: {
                        Authorization: resToken.value
                    }
                })
            ])
            .then(axios.spread((res1, res2, res3)=> {
                // console.log('get in progress orders: ', res.data.data.data);
                const pending = res1.data.data.data;
                const success = res2.data.data.data;
                const onDelivery = res3.data.data.data;
                dispatch({
                    type: 'SET_IN_PROGRESS',
                    value: [...pending, ...success, ...onDelivery],
                });
                dispatch(setLoading(false));
            }))
            .catch(err=> {
                console.log('error in progress orders: ', err.response);
                dispatch(setLoading(false));
            })
        }) 
}

export const getPastOrders = () => (dispatch) => {
    getData('token')
        .then(resToken=> {
            dispatch(setLoading(true));
            axios.all([
                axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
                    headers: {
                        Authorization: resToken.value
                    }
                }),
                axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
                    headers: {
                        Authorization: resToken.value
                    }
                })
            ])
            
            .then(axios.spread((res1, res2)=> {
                // console.log('get past orders: ', res.data.data.data);
                const cancelled = res1.data.data.data;
                const delivered = res2.data.data.data;
                dispatch({
                    type: 'SET_PAST_ORDERS',
                    value: [...cancelled, ...delivered],
                });
                dispatch(setLoading(false));
            }))
            .catch(err=> {
                console.log('error past orders: ', err.response);
                dispatch(setLoading(false));
            })
        }) 
}