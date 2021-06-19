import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICStarActive, ICStarInActive } from '../../../assets';
import Number from '../Number';

const Rating = ({number}) => {
    const renderStar = () => {
        let star = [];
        for(let i = 1; i <= 5; i++) {
            if(i <= number) {
                star.push(
                    <ICStarActive key={i}/>
                );
            } else {
                star.push( 
                    <ICStarInActive key={i}/>
                );
            }
        }
        return star;
    };

    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                { renderStar() }
            </View>
            <Number number={ number } type="decimal" style={styles.numberRating}/>
            {/* <Text>{ number }</Text> */}
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starContainer: {
        flexDirection: 'row',
        marginRight: 20
    },
    numberRating: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginTop: 2
    }
});
