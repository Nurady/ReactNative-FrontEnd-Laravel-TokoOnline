import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILSuccessOrder } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ILSuccessOrder/>
            <Gap height={30} />
            <Text style={styles.text}>You’ve Made Order</Text>
            <Text style={styles.desc}>Just stay at home while we are</Text>
            <Text style={styles.desc}>preparing your best foods</Text>
            <Gap height={30} />
            <View style={styles.button}>
                <Button text="Order Other Foods" />
            </View>
            <Gap height={12} />
            <View style={styles.button}>
                <Button 
                    text="View My Order" 
                    color="#8D92A3" 
                    textColor="white"
                    onPress={() => navigation.navigate('MainApp', {screen: 'Order'})}
                />
            </View>
        </View>
    );
};

export default SuccessOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    text: {
        color: '#020202',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginBottom: 6
    },
    desc:{
        color: '#8D92A3',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    button:{
        width: 200,
        height: 45
    }
});
