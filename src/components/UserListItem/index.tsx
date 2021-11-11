import React, { Fragment } from 'react'
import { TouchableHighlight } from 'react-native'
import * as RNE  from 'react-native-elements'
import styles from './styles'

const UserListItem = () => {
	const _handleTouch = () => {
		console.log('asdf')
	}
	return (
		<Fragment>
		<TouchableHighlight onPress={_handleTouch}>
			<RNE.Card containerStyle={styles.textInputBox}>
				<RNE.Text>asdfa</RNE.Text>
			</RNE.Card>
		</TouchableHighlight>
		</Fragment>

	)
}

export default UserListItem;