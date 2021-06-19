import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICRight } from '../../../assets';

const ItemListMenu = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.page}>
                <Text style = {styles.label}>{label}</Text>
                <View style= {styles.IconRight}>
                    <ICRight />
                </View>
            </View>
        </TouchableOpacity>    
    );
};

export default ItemListMenu;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13,
    },
    label: {
        fontSize: 14,
        fontFamily:'Poppins-Regular',
        color: '#020202'
    },
    IconRight: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
