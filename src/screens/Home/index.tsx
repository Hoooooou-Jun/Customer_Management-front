import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as RNE  from 'react-native-elements';
import HeaderButton from '../../components/HeaderButton/index';
import styles from './styles';

const Home = (props: any) => {
    return (
        <Fragment>
            <RNE.Header
                leftComponent={<HeaderButton props={props} />}
                centerComponent={<Text style={styles.headerText}>고객관리 시스템</Text>}
                centerContainerStyle={{justifyContent: 'center'}}
                containerStyle={styles.container}
            />
            <View style={{backgroundColor: 'white'}}>
                <StatusBar style="auto" />
            </View>
        </Fragment>
    );
};

export default Home;
