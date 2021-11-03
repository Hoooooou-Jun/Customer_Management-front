import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from './screens/Login/index';
import SignUp from './screens/SignUp/index';
import Home from './screens/Home/index';
import List from './screens/List/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SignNavi = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="TabNavi" component={TabNavi} />
        </Stack.Navigator>
    );
};

const TabNavi = () => {
    return (
        <Tab.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    )
}

// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator>

//         </Drawer.Navigator>
//     )
// }

export default SignNavi;