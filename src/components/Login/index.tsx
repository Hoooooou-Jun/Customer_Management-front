import React from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements'
import styles from './styles';

const LoginBox = () => {
	return (
		<View style={styles.shadowBox}>
            <RNE.Input placeholder=" ID" inputStyle={{fontSize: 17}} containerStyle={styles.input} leftIcon={<RNE.Icon name='person' size={24} color='gray' />} />
            <RNE.Input placeholder=" Password" inputStyle={{fontSize: 17}} containerStyle={styles.input} leftIcon={<RNE.Icon name='lock' size={24} color='gray' />} secureTextEntry={true} />
			<RNE.Button title="Login" buttonStyle={styles.button} />
        </View>
	)
}

export default LoginBox;
