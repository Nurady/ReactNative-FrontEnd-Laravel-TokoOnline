import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1ABC9C" />
            <Text style={styles.text}>Loading . . . .</Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginTop: 12
    }
});
