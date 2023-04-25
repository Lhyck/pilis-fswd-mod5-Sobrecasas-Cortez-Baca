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
    color: COLORS.title,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    marginTop: 10,
  },
  region: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "50%",
    width: Dimensions.get('screen').width *0.95,
    paddingTop: 2,
  },
  regionContent: {
    flex: 1,
    alignItems: 'center',
    height: "50%",
    width: "100%",
    padding: 0,
    
  },
  imageRegion: {
    borderRadius: 30,
    width: "90%",
    height: "50%",
    position: 'relative',
    borderWidth: 3,
    borderColor: COLORS.orange,
    marginTop: 10
  },
  descriptionRegion: {
    width: "90%",
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    margin: 0,
  },
  titleCentral: {
    color: COLORS.grey,
    fontSize: FONT_SIZE.lg,
    position: "absolute",
    top: '55%',
    fontStyle: 'italic',
  }
})