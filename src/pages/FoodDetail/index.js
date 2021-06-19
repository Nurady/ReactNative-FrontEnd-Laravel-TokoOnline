import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ICBackWhite } from '../../assets';
import { Button, Counter, Gap, Number, Rating } from '../../components';
import { getData } from '../../utils';

const FoodDetail = ({navigation, route}) => {
    const {id, name, picturePath, description, ingredients, rate, price } = route.params;
    const [totalItem, setTotalItem] = useState(1);
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        getData('userProfile')
            .then(res=> {
                // console.log('profile: ', res);
                setUserProfile(res);
            })
    },[]);

    const onCounterChange = (value) => {
        // console.log('counter: ', value);
        setTotalItem(value);
    };

    const onOrder = () => {
        const driver = 50000;
        const totalPrice = totalItem * price;
        const tax = (10 / 100) * totalPrice;
        const total = totalPrice + driver + tax;

        const data = {
            item: {
                id : id,
                name: name,
                price: price,
                picturePath: picturePath,
            },
            transaction: {
                totalItem: totalItem,
                totalPrice: totalPrice,
                driver: driver,
                tax: tax,
                total: total
            },
            userProfile
        };
        // console.log('data for checkout: ', data);
        navigation.navigate('OrderSummary', data)
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <ImageBackground source={{uri: picturePath }} style={styles.cover}>
                    <TouchableOpacity style={styles.backWhite} onPress={() => navigation.goBack()}>
                        <ICBackWhite />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.mainContent}>
                        <View style={styles.productContainer}>
                            <View>
                                <Text style={styles.title}>{name}</Text>
                                <Rating number={rate}/>
                            </View>
                            <Counter onValueChange={onCounterChange}/>
                        </View>
                        <Gap height={14} />
                        <Text style={styles.desc}>
                            {description}
                        </Text>
                        <Gap height={16} />
                        <Text style={styles.label}>Ingredients:</Text>
                        <Text style={styles.desc}>{ingredients}</Text>
                        <Gap height={40} />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.priceContent}>
                            <Text style={styles.labelTotal}>Total Price:</Text>
                            <Number number={totalItem * price} style={styles.totalPrice} />
                            {/* <Text style={styles.totalPrice}>IDR {totalItem * price}</Text> */}
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button text="Order Now" onPress={onOrder}/>   
                        </View>                                     
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default FoodDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22,
    },
    backWhite:{
        backgroundColor: 'black',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        borderRadius: 30/2
    },
    content: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'white',
        marginTop: -25,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1,
        paddingBottom: 50,
    },
    mainContent: {
        flex: 1
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#020202',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },    
    desc:{
        color: '#8D92A3',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    label: {
        color: '#020202',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginBottom:4
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16
    },
    priceContent: {
        flex: 1
    },
    labelTotal: {
        color: '#8D92A3',
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    },
    totalPrice: {
        color: '#020202',
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    },
    buttonContainer: {
        width: 163    
    }
});
