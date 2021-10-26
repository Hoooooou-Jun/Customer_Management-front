import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login/index';
import SignUp from './screens/SignUp/index';
import Home from './screens/Home/index';

const Stack = createStackNavigator();

const SignNavi = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Login" component={Login} />
            <Stack.Screen name = "SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default SignNavi;