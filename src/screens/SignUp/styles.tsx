import { StyleSheet, Dimensions } from 'react-native';

const MARGIN = Dimensions.get('window').width * 0.05

const styles = StyleSheet.create({
    logoBox: {
        flex: 5,
        backgroundColor: '#e9f5db',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    signUpBox: {
        flex: 12,
        backgroundColor: '#e9f5db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    etcBox: {
        flex: 1,
        backgroundColor: '#e9f5db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        marginLeft: MARGIN,
        marginBottom: MARGIN
    }
});

export default styles;