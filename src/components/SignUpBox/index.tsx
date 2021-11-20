import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import * as RNE  from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserSignUp } from '../../redux/userSignUp/action';
import { fetchUserInfoEdit } from '../../redux/userInfoEdit/action';
import { rootReducerType } from '../../redux/types';
import TextInput from '../TextInput/index'
import styles from './styles';

const SignUpBox = (props: any) => {
	const [ID, set_ID] = useState<string>("");
	const [PW, set_PW] = useState<string>("");
	const [checkPW, set_checkPW] = useState<string>("");
	const [check, set_check] = useState<boolean>(false);

	const [username, set_name] = useState<string>("");
	const [phone, set_phone] = useState<string>("");
	const [region, set_region] = useState<string>("");

	const [next, set_next] = useState<boolean>(false);

	const msg_signUp = useSelector((state: rootReducerType) => state.userSignUpReducer.message);
	const msg_infoEdit = useSelector((state: rootReducerType) => state.userInfoEditReducer.message);
	const dispatch = useDispatch();

	useEffect(() => {
		set_check(false)
	}, [PW, checkPW, ID]);

	useEffect(() => {
		if (msg_signUp === '200') {
			set_next(true)
			Alert.alert(
				'고객관리 시스템',
				'회원가입이 완료되었습니다. 추가 정보를 입력해주시기 바랍니다.',
			)
		}
		else if (msg_signUp === "Exist username" ) {
			Alert.alert(
				'고객관리 시스템',
				'이미 존재하는 계정입니다.',
			)
		}
		else if (msg_signUp === "Empty id") {
			Alert.alert(
				'고객관리 시스템',
				'아이디를 입력해주시기 바랍니다.',
			)
		}
		else if (msg_signUp === "Password must be 8-20 digits") {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호는 8자리 ~ 20자리 이내로 입력해주시기 바랍니다.',
			)
		}
		else if (msg_signUp === "Password must be a combination of english, number, special characher" ) {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호는 영문, 숫자, 특수문자를 조합하여 입력해주시기 바랍니다.',
			)
		}
		else if (msg_signUp === "Password must be a combination of english, number, special characher" ) {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호는 영문, 숫자, 특수문자를 조합하여 입력해주시기 바랍니다.',
			)
		}
		else {
			console.log(msg_signUp)
		}
	}, [msg_signUp]);

	useEffect(() => {
		if (msg_infoEdit === '200') {
			props.props.navigation.popToTop()
			Alert.alert(
				'고객관리 시스템',
				`${ID}님 환영합니다.`,
			)
		}
		else {
			console.log(msg_infoEdit)
		}
	}, [msg_infoEdit])

	useEffect(() => {
		return () => {
		}
	}, [])

	const _handleSignUp = () => {
		if (check) {
			dispatch(fetchUserSignUp(ID, PW));
		}
		else {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호 일치 여부를 확인해주시기 바랍니다.',
			)
		}
	};

	const _handleUserInfoEdit = () => {
		dispatch(fetchUserInfoEdit(ID, PW, username, phone, region))
	}

	const _checkPW = () => {
		if (PW === checkPW) {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호가 확인되었습니다.',
			)
			set_check(true)
		}
		else {
			Alert.alert(
				'고객관리 시스템',
				'비밀번호가 일치하지 않습니다.',
			)
		}
	}

	if ( next === false ) {
		return (
			<View style={styles.shadowBox}>
				<TextInput title="ID" onChangeText={set_ID} placeholder="아이디를 입력해주세요." secureTextEntry={false} />
				<TextInput title="Password" onChangeText={set_PW} placeholder="영문, 숫자, 특수문자를 포함해주세요." secureTextEntry={true}/>
				<TextInput title="Check Password" onChangeText={set_checkPW} placeholder="비밀번호를 다시 입력해주세요." secureTextEntry={true}/>
				<RNE.Button title="비밀번호 확인" onPress={_checkPW} disabled={check} icon={{name: "check-circle", size: 20, color: "skyblue"}} type="clear" />
				<RNE.Button title="Next" onPress={_handleSignUp} buttonStyle={styles.button} />
			</View>
		)
	}
	else { // next == true
		return (
			<View style={styles.shadowBox}>
				<TextInput title="이름" onChangeText={set_name} placeholder="성함을 입력해주세요." secureTextEntry={false}/>
				<TextInput title="전화번호" onChangeText={set_phone} placeholder="전화번호를 입력해주세요." secureTextEntry={true} keyboardType="number-pad"/>
				<TextInput title="거주지" onChangeText={set_region} placeholder="거주지를 입력해주세요" secureTextEntry={true}/>
				<RNE.Button title="Sign Up" onPress={_handleUserInfoEdit} buttonStyle={styles.button} />
        	</View>
		)
	}
}

export default SignUpBox;
