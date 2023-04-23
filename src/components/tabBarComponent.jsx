import {
    Pressable,
    StatusBar,
    StyleSheet,
    View,
    Text,
    LayoutChangeEvent,
  } from 'react-native'
  

export const TabBarComponent = ({ active, options, onLayout, onPress }) => {
    // // handle lottie animation -----------------------------------------
    // const ref = useRef(null)
  
    // useEffect(() => {
    //   if (active && ref?.current) {
    //     // @ts-ignore
    //     ref.current.play()
    //   }
    // }, [active])
  
    // // animations ------------------------------------------------------
  
    // const animatedComponentCircleStyles = useAnimatedStyle(() => {
    //   return {
    //     transform: [
    //       {
    //         scale: withTiming(active ? 1 : 0, { duration: 250 })
    //       }
    //     ]
    //   }
    // })
  
    // const animatedIconContainerStyles = useAnimatedStyle(() => {
    //   return {
    //     opacity: withTiming(active ? 1 : 0.5, { duration: 250 })
    //   }
    // })
  
    const TabBarComponentProps = {
        active: false,
        options: {},
        onLayout: (e) => { },
        onPress: () => { },
      };

      
    return (
      <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
        <View
          style={[styles.componentCircle]}
        />
        <View style={[styles.iconContainer]}>
          {/* @ts-ignore */}
          {<Text>?</Text>}
        </View>
      </Pressable>
    )
  }

  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'white',
    },
    activeBackground: {
      position: 'absolute',
    },
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    component: {
      height: 60,
      width: 60,
      marginTop: -5,
    },
    componentCircle: {
      flex: 1,
      borderRadius: 30,
      backgroundColor: 'white',
    },
    iconContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      height: 36,
      width: 36,
    }
  })