import { StyleSheet, Dimensions } from 'react-native';

const MARGIN = Dimensions.get('window').width * 0.05

const styles = StyleSheet.create({
    logoBox: {
        flex: 5,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    signUpBox: {
        flex: 12,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    etcBox: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        alignItems: 'center',
        marginBottom: MARGIN
    }
});

export default styles;