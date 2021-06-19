import React, { useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { getData } from '../../utils';


const Splash = ({navigation}) => {
    // Moving Between Page, props navigation, di injek ke semua page di dalam Stack Navigator 
    useEffect(() => {
        setTimeout(() => { 
            getData('token')
            .then(res => {
                // console.log('token: ', res);
                if(res) {
                    navigation.reset({index:0, routes:[{name: 'MainApp'}]});
                } else {
                    navigation.replace('SignIn');
                }
            });
        }, 2500);           
    }, []);

    // useEffect(() => {
    //     getData('token')
    //         .then(res => {
    //             console.log('token: ', res);
    //             if(res) {
    //                 navigation.reset({index:0, routes:[{name: 'MainApp'}]});
    //             }
    //         })
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Logo/>
                <View height={38}/>
                <Text style={ styles.text }>Mya Boutique</Text>
                <Text style={ styles.subText }>Tugu Pesawat</Text>
                <Text style={ styles.subText }>KTC Taliwang</Text>
            </View>            
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF5B7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    page:{
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',       
        marginBottom: 20,
        color: '#020202'
    },
    subText: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular', 
        color: '#020202'
    }
});

