import { DrawerActions } from '@react-navigation/native';
import React from 'react'
import * as RNE  from 'react-native-elements';
import styles from './styles';

const HeaderButton = (props: any) => {
	return (
		<RNE.Button 
			type="clear"
			icon={<RNE.Icon name='format-list-bulleted' size={24} color='white'/>}
			buttonStyle={styles.container}
			onPress={() => props.props.navigation.dispatch(DrawerActions.openDrawer)}
		/>
	);
};

export default HeaderButton;