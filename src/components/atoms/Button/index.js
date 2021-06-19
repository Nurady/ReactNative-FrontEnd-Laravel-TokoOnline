import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({color="#FFC700", text, textColor="#020202", onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.container(color)}>
                <Text style={ styles.text(textColor)}>{text}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default Button;

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        paddingVertical: 12,
        borderRadius:8
    }),
    text: (color) => ({
        color:  color,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    })
});
