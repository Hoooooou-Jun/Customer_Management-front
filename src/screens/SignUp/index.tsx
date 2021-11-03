import React, { Fragment } from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements';
import SignUpBox from '../../components/SignUpBox/index';
import styles from './styles';

const SignUp = (props: any) => {
    return (
        <Fragment>
            <View style={styles.logoBox}>
                <View style={styles.textBox}>
                    <RNE.Text h1 style={{color: '#718355'}}>회원가입</RNE.Text>
                    <RNE.Text h4 style={{color: '#97a97c'}}>Please enter the infomation</RNE.Text>
                </View>
            </View>
            <View style={styles.signUpBox}>
                <SignUpBox props={props} />
            </View>
            <View style={styles.etcBox}>
            </View>
        </Fragment>
    )
};

export default SignUp;