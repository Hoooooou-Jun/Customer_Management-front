import React from 'react';
import { View, Text } from 'react-native';
import UserListItem from '../../components/UserListItem/index';
import styles from './styles';

const List = () => {
	return (
        <View style={styles.container}>
            <UserListItem />
        </View>
	)
}

export default List;
