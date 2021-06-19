import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
// import { ILOrderEmpty } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { Logo } from '../../../assets';

const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            {/* <ILOrderEmpty /> */}
            <Logo />
            <Text style = {styles.title}>Seems like you have not</Text>
            <Text style = {styles.subTitle}>ordered any item yet</Text>
            <Text style = {styles.subTitle}>or wait a moment ...</Text>
            <Gap height={30} />
            <View style = {styles.buttonContainer}>
                <Button text="Find Your Fashion" onPress={() => navigation.replace('MainApp')}/>
            </View>            
        </View>
    )
}

export default EmptyOrder;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    title:{
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginTop: 30,
        marginBottom: 6
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal:80
    }
});

