import { StyleSheet, Dimensions } from 'react-native';

const MARGIN = Dimensions.get('window').height * 0.01

const styles = StyleSheet.create({
    container: {
        marginLeft: MARGIN
    },
});

export default styles;