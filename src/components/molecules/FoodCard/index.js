import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, name, rating, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={styles.container}>
                <Image source={image} style={styles.photo}/>
                <View style={styles.descContainer}>
                    <Text style={styles.text}>{name}</Text>
                    <Rating
                        number={rating}
                    />
                </View>          
            </View>
        </TouchableOpacity>
    );
};

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 210,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        marginRight: 24
    },
    photo: {
        width: 200,
        height: 140,
        resizeMode: 'cover'
    },
    descContainer: {
        padding: 12
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'
    },
});
