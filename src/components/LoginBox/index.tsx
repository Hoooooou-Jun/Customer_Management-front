import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import * as RNE  from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogin, fetchUserLoginReset } from '../../redux/userLogin/action';
import { rootReducerType } from '../../redux/types';
import styles from './styles';

const LoginBox = (props: any) => {
	const [ID, set_ID] = useState<string>("");
	const [PW, set_PW] = useState<string>("");

	const msg = useSelector((state: rootReducerType) => state.userLoginReducer.message)
	const dispatch = useDispatch()

	useEffect(() => {
		if (msg === 'Authorize Success') {
			Alert.alert(
				'고객관리 시스템',
				'로그인에 성공하였습니다.',
			)
		}
		else if (msg === "Unauthorized user") {
			Alert.alert(
				'고객관리 시스템',
				'가입되지 않은 계정입니다.',
			)
			dispatch(fetchUserLoginReset())
		}
		else if (msg === 'Incorrect password') {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호가 틀렸습니다.',
			)
			dispatch(fetchUserLoginReset())
		}
		else if (msg === 'Unauthorized token') {
			Alert.alert(
				'고객관리 시스템',
				'토큰이 서명되지 않았습니다.',
			)
			dispatch(fetchUserLoginReset())
		}
		else {
			console.log(msg)
		}
	}, [msg])

	const _handleLogin = async () => {
		dispatch(fetchUserLogin(ID, PW))
	}

	return (
		<View style={styles.shadowBox}>
            <RNE.Input placeholder=" ID" onChangeText={set_ID} inputStyle={{fontSize: 17}} containerStyle={styles.input} leftIcon={<RNE.Icon name='person' size={24} color='gray' />} />
            <RNE.Input placeholder=" Password" onChangeText={set_PW} inputStyle={{fontSize: 17}} containerStyle={styles.input} leftIcon={<RNE.Icon name='lock' size={24} color='gray' />} secureTextEntry={true} />
			<RNE.Button title="Login" onPress={_handleLogin} buttonStyle={styles.button} />
        </View>
	)
}

export default LoginBox;
