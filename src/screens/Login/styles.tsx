import { StyleSheet, Dimensions } from 'react-native';

const BUTTON_WIDTH = Dimensions.get('window').height * 0.3

const styles = StyleSheet.create({
    container1: {
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '70%'
    },
    button: {
        width: BUTTON_WIDTH,
        backgroundColor: '#e76f51',
        borderRadius: 100
    }
});

export default styles;