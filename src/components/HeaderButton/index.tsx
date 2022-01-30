import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import * as RNE  from 'react-native-elements';
import styles from './styles';

const HeaderButton = () => {
    const navigation = useNavigation();
    return (
        <RNE.Button
            type="clear"
            icon={<RNE.Icon name='format-list-bulleted' size={24} color='white' />}
            buttonStyle={styles.container}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
    );
};

export default HeaderButton;