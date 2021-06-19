import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ProfileDummy } from '../../../assets';
import { getData } from '../../../utils';

const HomeProfile = () => {
    const [photo, setPhoto] = useState(ProfileDummy);
    // local storage
    useEffect(() => {
        getData('userProfile')
            .then(res => {
                setPhoto({uri: res.profile_photo_url});
                // console.log({uri: res.profile_photo_url});
            })
    });

    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.appName}>Mya Boutique</Text>
                <Text style={styles.desc}>Let's Get Best Fashion</Text>
            </View>
            <Image source={photo} style={styles.profile}/>
            {/* Image tipe PNG Harus menggunakan <Image> */}
        </View>
    );
};

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
});
