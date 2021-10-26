import React, { Fragment } from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements'
import styles from './styles';

const Login = (props: any) => {
    return (
        <Fragment>
            <View style={styles.container1}>
                {/* <RNE.Image style={{ width: 200, height: 200 }} source={{uri: 'customer_front/assets/images/image.png'}} /> */}
                <RNE.Text h1 style={{color: '#264653'}}>회원관리체계</RNE.Text>
                <RNE.Text h4 style={{color: 'gray'}}>Customer Management</RNE.Text>
            </View>
            <View style={styles.container2}>
                <RNE.Input placeholder="ID" containerStyle={styles.input} leftIcon={<RNE.Icon name='account-box' size={24} color='gray' />}/>
                <RNE.Input placeholder="Password" containerStyle={styles.input} leftIcon={<RNE.Icon name='lock' size={24} color='gray' />}/>
            </View>
            <View style={styles.container3}>
                <RNE.Button title="Login" buttonStyle={styles.button} />
                <RNE.Button title="Sign Up" type="clear" onPress={() => props.navigation.navigate("SignUp")}/>
            </View>
        </Fragment>
    );
};

export default Login;