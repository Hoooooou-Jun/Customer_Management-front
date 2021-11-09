import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from 'react-redux';
import { rootReducerType } from './redux/types';
import Login from './screens/Login/index';
import SignUp from './screens/SignUp/index';
import Home from './screens/Home/index';
import List from './screens/List/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props: any) => {
    const [onLogin, set_onLogin] = useState(false);
    const message = useSelector((state: rootReducerType) => state.userLoginReducer.message)
    useEffect(() => {
        if ( message === 'Authorize Success' ) {
            set_onLogin(true);
        }
        else {}
    }, [message])
    return (
        onLogin ? (
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>

        ) : (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        )
    );
};

// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator>

//         </Drawer.Navigator>
//     )
// }

export default Navigation;