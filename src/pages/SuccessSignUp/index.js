import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ILSuccessSignUp } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessSignUp = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ILSuccessSignUp/>
            <Text style = {styles.title}>Yeay! Completed</Text>
            <Text style = {styles.subTitle}>Now you are able to order</Text>
            <Text style = {styles.subTitle}>some foods as a self-reward</Text>
            <Gap height={30} />
            <View style = {styles.buttonContainer}>
                <Button text="Find Foods" onPress={() => navigation.reset({index: 0, routes: [{name: 'MainApp'}]})}/>
            </View>            
        </View>
    )
}

export default SuccessSignUp;

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
        // flex: 1,
        width: '100%',
        paddingHorizontal:80
    }
});
