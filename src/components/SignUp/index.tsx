import React from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements'
import TextInput from '../TextInput/index'
import styles from './styles';

const SignUpBox = () => {
	return (
		<View style={styles.shadowBox}>
			<TextInput title="ID" placeholder="아이디를 입력해주세요." secureTextEntry={false}/>
			<TextInput title="Password" placeholder="영문, 숫자, 특수문자를 포함해주세요." secureTextEntry={false}/>
			<TextInput title="Check Password" placeholder="비밀번호를 다시 입력해주세요." secureTextEntry={false}/>
			<RNE.Button title="Next" buttonStyle={styles.button} />
        </View>
	)
}

export default SignUpBox;
