import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { signInAction } from '../../redux/action';
import { getData, useForm } from '../../utils';

const SignIn = ({navigation}) => {
    const [ form, setForm ] = useForm({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    
    const onSubmit = () => {
        // event.preventDefault();
        dispatch(signInAction(form, navigation));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow:1 }}>
            <View style = {styles.page}>
                <Header title="Sign In" subTitle="Find Your Best Fashion"/>
                <View style = {styles.container}>
                    <TextInput 
                        label="Email Address" 
                        placeholder="Tuliskan Email Anda" 
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput 
                        label="Password" 
                        placeholder="Tuliskan Password Anda" 
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry
                    />   
                    <Gap height={24} />         
                    <Button 
                        text="Sign In"
                        onPress={onSubmit}
                    />
                    <Gap height={12} />
                    <Button 
                        text="Create New Account" 
                        color="#8D92A3" 
                        textColor="white"
                        onPress={() => navigation.navigate('SignUp')}
                        // onPress adalah sebuah function, untuk berpindah halaman dibutuhkan props navigation
                    />
                </View>         
            </View>
        </ScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop:24,
        flex: 1
    }
});
