import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.secondary
    },
    itemContainer: {
        flex: 1,
        width: Dimensions.get('screen').width - 30,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 10,
        backgroundColor: COLORS.grey,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        left: 15,
        top: 20
    },
    listItem: {
        padding: 10
    },
    itemImage: {
        height: 200,
        width: '100%',
        resizeMode: 'cover'
    },
    itemTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 10
    },
    itemPrice: {
        marginTop: 5,
        marginBottom: 10,
        marginHorizontal: 10
    },
    containerOff: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginTop: StatusBar.currentHeight,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        alignContent: 'center',
        padding: 10
      },
      titleOff: {
        color: COLORS.white,
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 300,
      },

})