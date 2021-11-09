import React, { Fragment } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as RNE  from 'react-native-elements';
import LoginBox from '../../components/LoginBox/index';
import styles from './styles';

const Login = (props: any) => {
    return (
        <Fragment>
            <View style={styles.logoBox}>
                <StatusBar style="auto" />
                <View style={styles.textBox}>
                    <RNE.Text h1 style={{color: 'white'}}>고객관리 시스템</RNE.Text>
                    <RNE.Text h4 style={{color: '#e9f5db'}}>Customer Management System</RNE.Text>
                </View>
            </View>
            <View style={styles.loginBox}>
                <LoginBox props={props}/>
            </View>
            <View style={styles.etcBox}>
                <RNE.Button title="Sign Up" type="clear" onPress={() => props.navigation.navigate("SignUp")} titleStyle={{color: 'white'}} />
                <RNE.Button title="Forget to password..." type="clear" titleStyle={{color: 'white'}} />
            </View>
        </Fragment>
    );
};

export default Login;