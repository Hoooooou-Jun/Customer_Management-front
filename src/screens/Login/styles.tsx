import { StyleSheet, Dimensions } from 'react-native';

const MARGIN = Dimensions.get('window').width * 0.05

const styles = StyleSheet.create({
    logoBox: {
        flex: 5,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    loginBox: {
        flex: 8,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    etcBox: {
        flex: 4,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '70%'
    },
    textBox: {
        alignItems: 'center',
        marginBottom: MARGIN
    }
});

export default styles;