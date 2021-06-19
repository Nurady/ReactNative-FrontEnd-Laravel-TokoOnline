import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Header, ItemListFood, ItemValue, Loading } from '../../components';
import { API_HOST } from '../../config';
import { getData } from '../../utils';
import { WebView } from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
    const {item, transaction, userProfile } = route.params;
    // const [token, setToken] = useState('');
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [paymentURL, setPaymentURL] = useState('https://google.com');

    // useEffect(() => {
    //     getData('token')
    //         .then(res=> {
    //             // console.log('token transaksi: ', res);
    //             setToken(res.value);
    //         })
    // }, []);

    const onCheckOut = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: 'PENDING'
        };

        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/checkout`, data,
            {
                headers: {
                    Authorization: resToken.value
                }
            })
            .then(res=> {
                // console.log('checkout success: ', res.data);
                setIsPaymentOpen(true);
                setPaymentURL(res.data.data.payment_url);
            })
            .catch(err=> {
                console.log('checkout error: ', err.response);
            }) 
        })   
    };

    const onNavChange = (state) => {
        console.log('nav: ', state);
        // const urlSuccess = 'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=3856&status_code=201&transaction_status=pending';
        const titleWeb ='Laravel';
        if(state.title === titleWeb) {
            navigation.reset({index:0, routes: [{name: 'SuccessOrder'}]});
        }
    };

    if(isPaymentOpen) {
        return (
            <>
                <Header 
                    title="Payment"
                    subTitle="Detail Pembayaran"
                    onBack={()=> setIsPaymentOpen(false)}
                />
                <WebView
                    source={{ uri: paymentURL }}
                    startInLoadingState={true}
                    renderLoading={() => <Loading/>}
                    onNavigationStateChange={ onNavChange }
                />
            </>
        )
    }    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Header 
                    title="Order Summary" 
                    subTitle="You Deserve Better Fashion" 
                    onBack={()=> navigation.goBack()}
                />
                <Gap height={24} />
                <View style={styles.content}>
                    <Text style={styles.title}>Item Ordered</Text>                
                    <ItemListFood 
                        image={{uri: item.picturePath}} 
                        items={transaction.totalItem}
                        type="order-summary"
                        price={item.price}
                        name={item.name}
                    />
                    <Gap height={24} />
                    <Text style={styles.title}>Details Transaction</Text>
                    <ItemValue 
                        label={item.name} 
                        value={transaction.totalPrice} 
                        type="currency"
                    />
                    <ItemValue 
                        label="Driver" 
                        value={transaction.driver} 
                        type="currency"
                    />
                    <ItemValue 
                        label="Tax 10%" 
                        value={transaction.tax} 
                        type="currency"
                    />
                    <ItemValue 
                        label="Total Price" 
                        value={transaction.total} 
                        type="currency"
                        valueColor="#1ABC9C" 
                    />
                </View> 
                <Gap height={24} />
                <View style={styles.content}>
                    <Text style={styles.title}>Deliver to:</Text>
                    <ItemValue label="Name" value={userProfile.name} />
                    <ItemValue label="Phone No." value={userProfile.phoneNumber} />
                    <ItemValue label="Address" value={userProfile.address} />
                    <ItemValue label="House No." value={userProfile.houseNumber} />
                    <ItemValue label="City" value={userProfile.city} />
                </View>  
                <Gap height={24} />
                <View style={styles.button}>
                    <Button text="Checkout Now"  onPress={onCheckOut}/>
                </View>       
            </View>
        </ScrollView>
    );
};

export default OrderSummary;

const styles = StyleSheet.create({
    content:{
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    title: {
        color: '#020202',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginBottom: 8
    },
    button:{
        paddingBottom: 26,
        paddingHorizontal: 24
    },
});
