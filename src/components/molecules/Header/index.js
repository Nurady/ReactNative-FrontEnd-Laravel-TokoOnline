import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBack } from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
    // if (type === 'Sign-In') {
    //     return (
    //         <View style = {styles.container}>
    //             <View>
    //                 <Text style = {styles.title}>{title}</Text>
    //                 <Text style = {styles.subTitle}>{subTitle}</Text>
    //             </View>            
    //         </View>
    //     )
    // }

    return (
        <View style = {styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
                        <View style={styles.back}>
                            <ICBack/>
                        </View> 
                    </TouchableOpacity>  
                )
            }                               
            <View>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.subTitle}>{subTitle}</Text>
            </View>            
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop : 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        padding: 16,
        marginRight: 16,
        marginLeft: -10
    },
    title: {
        color: '#020202',
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    },
    subTitle: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Light',
        fontSize: 14
    }
});
