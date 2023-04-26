import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginTop: StatusBar.currentHeight,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        padding: 10
    },
    input: {
        borderWidth: 3,
        borderColor: COLORS.orange,
        borderRadius: 30,
        margin: 20,
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        height: 50,
        paddingLeft: 30,
        backgroundColor: COLORS.white
    },
    inputArea: {
        borderWidth: 3,
        borderColor: COLORS.orange,
        borderRadius: 30,
        margin: 20,
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        paddingLeft: 30,
        backgroundColor: COLORS.white

    },
    containerInputs: {
        width: Dimensions.get('screen').width,
        top: 100
    },
    title: {
        color: COLORS.white,
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center'
    },

    description: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: COLORS.orange,
        fontSize: FONT_SIZE.lg,
        color: COLORS.white,
        height: 50,
        borderWidth: 3,
        borderColor: COLORS.orange,
        borderRadius: 30,
        width: 200,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 20
    },
    button: {
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
        paddingLeft: 50
    },
})