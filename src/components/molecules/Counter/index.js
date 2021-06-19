import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBtnMinus, ICBtnPlus } from '../../../assets';

const Counter = ({onValueChange}) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        onValueChange(value);
    }, []);

    const onCount = (type) => {
        let result = value;
        // type: bertambah atau berkurang
        if(type === 'plus') {
            result = value + 1;
        }
        if(type === 'minus') {
            if(value > 1) {
                result = value - 1;
            }
        }
        setValue(result);
        onValueChange(result);
    };

    return (
        <View style={styles.page}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onCount('minus')}>
                <ICBtnMinus />
            </TouchableOpacity>            
            <Text style={styles.text}>{value}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onCount('plus')}>
                <ICBtnPlus />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#020202',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 10,
        alignItems: 'center',
    }
});
