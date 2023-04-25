import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../utils/theme'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary,
      marginTop: StatusBar.currentHeight,
      width: Dimensions.get('screen').width,
      alignItems: 'center',
      padding: 10
    },
    image: {
      position: 'absolute',
      width: Dimensions.get('screen').width,
      height: 250,
      bottom: 60
    },
    textContainer: {
      padding: 20
    },
    title: {
      color: COLORS.white,
      fontSize: FONT_SIZE.lg,
      fontWeight: 'bold',
      marginTop: 10
    },
  })