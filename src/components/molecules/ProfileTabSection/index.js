import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import { ItemListMenu } from '..';
import ItemListMenu from '../ItemListMenu';
import { Gap } from '../../atoms';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
          backgroundColor: '#020202', 
          height: 3,
          width:'15%', 
          marginLeft: '3%' }}
      style={{ 
          backgroundColor: 'white', 
          elevation: 0, 
          shadowOpacity: 0,
          borderBottomColor: '#F2F2f2',
          borderBottomWidth: 1,
        }}
      tabStyle={{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontSize: 14, color: focused ? '#020202' : '#8D92A3' }}>
          {route.title}
        </Text>
      )}
    />
  );
const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
      // event.preventDefault();
      AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      });
  };

  return (
    <View style={styles.page}>
      <Gap height={18} />
      <ItemListMenu label="Edit Profile"/>
      <ItemListMenu label="Home Address"/>
      <ItemListMenu label="Security"/>
      <ItemListMenu label="Payment"/>
      <ItemListMenu label="SignOut" onPress={signOut}/>
      <Gap height={18} />
    </View>
  )
}

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
        <Gap height={18} />
        <ItemListMenu label="Rate App"/>
        <ItemListMenu label="Help Center"/>
        <ItemListMenu label="Privacy & Policy"/>
        <ItemListMenu label="Terms & Conditions"/>
        <Gap height={18} />
    </View>
  )
};

const initialLayout={ width: Dimensions.get('window').width }

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'Mya Boutique' },
    ]);

    const renderScene = SceneMap({
        1: Account,
        2: FoodMarket,
      });
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{backgroundColor: 'white'}}
        />
    );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  page:{
    paddingTop: 8,
    paddingHorizontal: 24,
  }
});
