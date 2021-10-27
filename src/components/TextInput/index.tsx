import React from 'react';
import { View } from 'react-native';
import * as RNE  from 'react-native-elements'
import styles from './styles';

const TextInput = (props: any) => {
	return (
		<View style={styles.textInputBox}>
			<RNE.Text style={styles.text}>{props.title}</RNE.Text>
			<View style={{alignItems: 'center', width: '100%'}}>
				<RNE.Input onChangeText={props.onChangeText} placeholder={props.placeholder} inputStyle={{fontSize: 15}} containerStyle={{width: "90%"}} secureTextEntry={props.secureTextEntry} />
			</View>
		</View>
	)
}

export default TextInput;