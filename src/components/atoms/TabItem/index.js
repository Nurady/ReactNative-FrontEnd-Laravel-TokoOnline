import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ICHomeActive, ICHomeInActive, ICOrderActive, ICOrderInActive, ICProfileActive, ICProfileInActive } from '../../../assets';

const TabItem = ({title, active, onPress,onLongPress }) => {
    const Icon = () => {
        switch (title) {
            case 'Home':
                return active ? <ICHomeActive/> : <ICHomeInActive/>
            case 'Order':
                return active ? <ICOrderActive/> : <ICOrderInActive/>
            case 'Profile':
                return active ? <ICProfileActive/> : <ICProfileInActive/>
            default:
                return (
                    <ICOrderActive />
                )
        }    
    }
    return (
        <TouchableOpacity style = { styles.container } onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style = { styles.text(active) }>{ title }</Text>
        </TouchableOpacity>
    )
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text : (active) => ({
        color: active ? '#005792' : '#020202',
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        marginTop: 4
    }), 
});
