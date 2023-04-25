import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from './src/utils/theme'
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { LocationListStackScreens } from './src/screens/LocationList/locationListStackScreen.jsx'
import { HomeScreen } from './src/screens/home/HomeScreen';
import { InfoScreen } from './src/screens/info/InfoScreen';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home',
  Explorar: 'search',
  Profile: 'user',
  Info: 'info-circle',
  Visit: 'heart-circle-outline'
}

const tabBarOptions = {
  headerShown: false,
  tabBarLabel: "",
  tabBarStyle: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    bottom: 15,
    height: 55,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  shadowColor: '#000',
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 10,
    height: 10
  },
}

const tabScreenOptions = ({ route }) => {

  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ focused }) => (
      <View style={{
        position: 'absolute',
        top: 10
      }}>
        <FontAwesome5
          name={iconName}
          size={25}
          color={focused ? COLORS.primary : COLORS.inactive}
        ></FontAwesome5>
      </View>
    )
  }
}

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name={"Home"} component={HomeScreen} options={tabScreenOptions} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Explorar"} component={LocationListStackScreens} options={tabScreenOptions}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>



        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.primary,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 30 : 30
              }}>
                <Ionicons name="heart-circle-outline" size={30} color="white" />
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Info"} component={InfoScreen} options={tabScreenOptions} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3 - 20,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Profile"} component={SettingsScreen} options={tabScreenOptions} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4 - 30,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 20,
        height: 4,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        bottom: 20,
        left: 25,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width
  width = width
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}





const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

});