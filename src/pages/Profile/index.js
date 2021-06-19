import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Gap, ProfileTabSection } from '../../components';
import { getData } from '../../utils';

const Profile = () => {
    const [userProfile, setUserProfile] = useState({})
    useEffect(() => {
        getData('userProfile')
            .then(res=> {
                setUserProfile(res);
            })
    }, []);

    return (
        <View style = {styles.page}>
            <View style = {styles.photoWrapper}>
                <View style = {styles.photo}>
                    <View style = {styles.borderPhoto}>
                        <Image source={{uri: userProfile.profile_photo_url}} style = {styles.photoContainer}/>
                    </View>
                </View> 
                <Text style = {styles.name}>{userProfile.name}</Text>
                <Text style = {styles.email}>{userProfile.email}</Text>
            </View>            
            <Gap height={24} />
            <View style={styles.tabContainer}>
                <ProfileTabSection/>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    photoWrapper:{
        backgroundColor: 'white',
        paddingBottom: 26
    },
    tabContainer: {
        flex: 1,
    },
    photo:{
        alignItems:'center',
        marginTop: 26,
        marginBottom: 16
    },
    borderPhoto:{
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius:110,
        borderStyle: 'dashed',
        justifyContent:'center',
        alignItems:'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor:'#F0F0F0',
        padding: 24,
    },
    name: {
        fontSize: 18,
        fontFamily:'Poppins-Medium',
        color: '#020202',
        textAlign: 'center'
    },
    email: {
        fontSize: 14,
        fontFamily:'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    }
});
