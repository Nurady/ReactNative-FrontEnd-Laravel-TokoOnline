import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyOrder, Gap, Header, OrderTabSection  } from '../../components';
import { getOrders } from '../../redux/action';

const Order = () => {
    const [isEmpty] = useState(false);
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.orderReducer);

    useEffect(() => {
        dispatch(getOrders());    
    }, []);

    return (
        <View style = {styles.container}>
            {
                // isEmpty 
                orders.length < 1
                ? 
                    (
                    <EmptyOrder />
                    ) 
                : 
                    (
                        <View style={styles.content}>
                            <Header title="Your Orders" subTitle="Wait for the Best Fashion" />
                            <Gap height={24} />
                            <View style={styles.tabContainer}>
                                <OrderTabSection />
                            </View>
                        </View>

                    )
            } 
        </View>
    )
}

export default Order;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content:{
        flex: 1,
    },
    tabContainer: {
        flex: 1,
    }
});

