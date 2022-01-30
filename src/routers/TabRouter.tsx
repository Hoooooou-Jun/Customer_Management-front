import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home/index';
import List from '../screens/List/index';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();

const HomeScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
}

const ListScreen = () => {
    return (
        <ListStack.Navigator screenOptions={{headerShown: false}}>
            <ListStack.Screen name="List" component={List} />
        </ListStack.Navigator>
    );
}

const TabRouter = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            screenOptions={{
                headerShown: false,
                // animationEnabled: true,
                // swipeEnabled: true,
                // scrollEnabled: true
            }}
            activeColor="white"
            inactiveColor="lightgrey"
            barStyle={{ backgroundColor: '#0197f6' }}
        >
            <Tab.Screen
                name="회원 현황"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color='white' size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="회원 목록"
                component={ListScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="folder-account" color='white' size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRouter;
