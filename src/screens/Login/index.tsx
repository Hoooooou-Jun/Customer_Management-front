import React, { Fragment } from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements';
import LoginBox from '../../components/Login/index';
import styles from './styles';

const Login = (props: any) => {
    return (
        <Fragment>
            <View style={styles.logoBox}>
                <View style={styles.textBox}>
                    <RNE.Text h1 style={{color: '#264653'}}>고객관리 시스템</RNE.Text>
                    <RNE.Text h4 style={{color: '#2a9d8f'}}>Customer Management System</RNE.Text>
                </View>
            </View>
            <View style={styles.loginBox}>
                <LoginBox />
            </View>
            <View style={styles.etcBox}>
                <RNE.Button title="Sign Up" type="clear" onPress={() => props.navigation.navigate("SignUp")}/>
                <RNE.Button title="Forget to password..." type="clear" />
            </View>
        </Fragment>
    );
};

export default Login;