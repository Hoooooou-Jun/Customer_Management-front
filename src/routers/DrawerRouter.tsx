import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRouter from './TabRouter';
import MyInfo from '../screens/myInfo';
import HeaderButton from '../components/HeaderButton';

const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
    return (
        <Drawer.Navigator
            screenOptions={{headerShown: true}}>
            <Drawer.Screen
                name='Home'
                component={TabRouter}
                options={{
                    title: '고객관리 시스템',
                    headerStyle: {
                        backgroundColor: '#0197f6',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: () => <HeaderButton />
			    }}
            />
            <Drawer.Screen
                name="myInfo"
                component={MyInfo}
                options={{
                    title: '내 정보',
                    headerStyle: {
                        backgroundColor: '#0197f6',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: () => <HeaderButton />
                }}
            />
        </Drawer.Navigator>
    )
}
export default DrawerRouter;
