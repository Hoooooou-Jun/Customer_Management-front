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
                    <RNE.Text h1 style={{color: '#0197f6'}}>고객관리 시스템</RNE.Text>
                    <RNE.Text h5 style={{color: '#8ED3FE', fontWeight: 'bold'}}>Customer Management System</RNE.Text>
                </View>
            </View>
            <View style={styles.loginBox}>
                <LoginBox props={props}/>
            </View>
            <View style={styles.etcBox}>
                <RNE.Button title="Sign Up" type="clear" onPress={() => props.navigation.navigate("SignUp")} titleStyle={{color: 'grey'}} />
                <RNE.Button title="Forget to password..." type="clear" titleStyle={{color: 'grey'}} />
            </View>
        </Fragment>
    );
};

export default Login;