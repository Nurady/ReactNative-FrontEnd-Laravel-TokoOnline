import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Splash,
    SignIn,
    SignUp,
    SignUpAddress,
    SuccessSignUp,
    Home,
    Order,
    Profile,
    FoodDetail,
    OrderSummary,
    SuccessOrder,
    OrderDetail
} from '../pages';
import { BottomNavigator } from '../components';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/action';

// Stack Navigator: berpindah antar halaman
// Tab Navigator : berpindah antar halaman, namun ada komponen yang sama

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar = { props => <BottomNavigator {...props} /> }>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order}/>
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }}/>
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }}/>
            <Stack.Screen name="OrderSummary" component={OrderSummary} options={{ headerShown: false }}/>
            <Stack.Screen name="SuccessOrder" component={SuccessOrder} options={{ headerShown: false }}/>
            <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>           
        </Stack.Navigator>
    );
};

export default Router;