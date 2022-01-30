import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/index';
import SignUp from '../screens/SignUp/index';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const MainScreen = () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="SignUp" component={SignUp} />
        </MainStack.Navigator>
    )
}

const StackRouter = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={MainScreen} />
        </Stack.Navigator>
    )
}

export default StackRouter
