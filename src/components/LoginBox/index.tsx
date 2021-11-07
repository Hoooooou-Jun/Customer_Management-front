import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import * as RNE  from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogin } from '../../redux/userLogin/action';
import { rootReducerType } from '../../redux/types';
import styles from './styles';

const LoginBox = (props: any) => {
	const [ID, set_ID] = useState<string>("");
	const [PW, set_PW] = useState<string>("");

	const msg = useSelector((state: rootReducerType) => state.userLoginReducer.message)
	const count = useSelector((state: rootReducerType) => state.userLoginReducer.count)
	const dispatch = useDispatch()
	console.log(msg)
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
		}
		else if (msg === 'Incorrect password') {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호가 틀렸습니다.',
			)
		}
		else if (msg === 'Unauthorized token') {
			Alert.alert(
				'고객관리 시스템',
				'토큰이 서명되지 않았습니다.',
			)
		}
		else {
			console.log(msg)
		}
	}, [msg, count]) // count를 넣은 것도 맘에 안드는데 msg까지 넣어서 더 맘에 안듬;

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
