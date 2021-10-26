import React from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements'
import styles from './styles';

const SignUpInfoBox = () => {
	return (
		<View style={styles.shadowBox}>
			<RNE.Input placeholder="성합을 입력해주세요." containerStyle={styles.input} leftIcon={<RNE.Icon name='person' size={22} color='gray' />}/>
			<RNE.Input placeholder="전화번호를 입력해주세요." containerStyle={styles.input} leftIcon={<RNE.Icon name='lock' size={22} color='gray' />}/>
			<RNE.Input placeholder="소개를 입력해주세요." containerStyle={styles.input} leftIcon={<RNE.Icon name='check-circle' size={22} color='gray' />}/>
			<RNE.Button title="Next" buttonStyle={styles.button} />
		</View>
	)
}

export default SignUpInfoBox;