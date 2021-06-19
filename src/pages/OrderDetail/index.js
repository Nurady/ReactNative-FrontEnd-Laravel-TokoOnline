import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components';
import { API_HOST } from '../../config';
import { getData } from '../../utils';

const OrderDetail = ({navigation, route}) => {
    const order = route.params;

    const onCancel = () => {
        const data = {
            status : 'CANCELLED'
        };
        getData('token')
            .then(resToken => {
                axios.post(`${API_HOST.url}/transaction/${order.id}`, data,
                {
                    headers: {
                        Authorization: resToken.value
                    }
                })
                .then(res=> {
                    // console.log('cancel success: ', res);
                    navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
                })
                .catch(err => {
                    console.log('cancel error: ', err);
                });
            });     
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Header 
                    title="Payment" 
                    subTitle="You Deserve Better Fashion" 
                    onBack={()=> navigation.goBack()}
                />
                <Gap height={24} />
                <View style={styles.content}>
                    <Text style={styles.title}>Item Ordered</Text>                
                    <ItemListFood 
                        image={{uri: order.food.picturePath}} 
                        items={order.quantity}
                        type="order-summary"
                        price={order.food.price}
                        name={order.food.name}
                    />
                    <Text style={styles.title}>Details Transaction</Text>
                    <ItemValue label={order.food.name} value={order.food.price * order.quantity} type="currency" />
                    <ItemValue label="Driver" value={50000} type="currency"/>
                    <ItemValue label="Tax 10%" value={(10/100) * (order.food.price * order.quantity)} type="currency"/>
                    <ItemValue label="Total Price" value={order.total} valueColor="#1ABC9C" type="currency"/>
                </View> 
                <Gap height={24} />
                <View style={styles.content}>
                    <Text style={styles.title}>Deliver to:</Text>
                    <ItemValue label="Name" value={order.user.name} />
                    <ItemValue label="Phone No." value={order.user.phoneNumber} />
                    <ItemValue label="Address" value={order.user.address} />
                    <ItemValue label="House No." value={order.user.houseNumber} />
                    <ItemValue label="City" value={order.user.city} />
                </View>  
                <Gap height={24} />
                <View style={styles.content}>
                    <Text style={styles.title}>Order Status:</Text>
                    <ItemValue 
                        label={`#${order.id}`} 
                        value={order.status} 
                        valueColor={order.status === 'CANCELLED' ? '#D9435E' : "#1ABC9C"} />
                </View>  
                <Gap height={24} />
                <View style={styles.button}>
                    {
                        order.status === 'PENDING' 
                        && 
                        <Button 
                            text="Cancel My Order" 
                            color="#D9435E" 
                            textColor="white"
                            onPress={onCancel}
                        />
                    }
                    
                </View>       
            </View>
        </ScrollView>
    );
};

export default OrderDetail;

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

