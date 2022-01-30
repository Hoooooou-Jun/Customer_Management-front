import { StyleSheet, Dimensions } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.9
const CARD_HEIGHT = Dimensions.get('window').height * 0.35
const BUTTON_WIDTH = Dimensions.get('window').height * 0.4

const styles = StyleSheet.create({
    shadowBox: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        elevation: 20,
        borderRadius: 25,
    },
    input: {
        width: '90%'
    },
    button: {
        width: BUTTON_WIDTH,
        backgroundColor: '#0197f6',
        borderRadius: 100
    }
});

export default styles;