import { StyleSheet, Dimensions } from 'react-native';

const BOX_WIDTH = Dimensions.get('window').width * 0.95
const BOX_HEIGHT = Dimensions.get('window').height * 0.1
const MARGIN = Dimensions.get('window').width * 0.02
const TEXT_MARGIN = Dimensions.get('window').width * 0.068

const styles = StyleSheet.create({
    textInputBox: {
        margin: MARGIN,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'flex-start',
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
    },
    text: {
        marginLeft: TEXT_MARGIN,
        fontSize: 20,
    }
});

export default styles;