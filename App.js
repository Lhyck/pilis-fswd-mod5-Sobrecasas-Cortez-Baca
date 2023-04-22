// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LocationListStackScreens } from './src/screens/LocationList/locationListStackScreens';

function Feed() {
    return ( <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
        <
        Text > Feed! < /Text> </View >
    );
}

function Profile() {
    return ( <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' }
        } >
        <
        Text > Profile! < /Text> < /
        View >
    );
}

function Notifications() {
    return ( <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' }
        } >
        <
        Text > Notifications! < /Text> < /
        View >
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return ( <
        Tab.Navigator initialRouteName = "Feed"
        screenOptions = {
            {
                tabBarActiveTintColor: '#e91e63',
            }
        } >
        <
        Tab.Screen name = "Feed"
        component = { Feed }
        options = {
            {
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => ( <
                    MaterialCommunityIcons name = "home"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        /> <
        Tab.Screen name = "Notifications"
        component = { Notifications }
        options = {
            {
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => ( <
                    MaterialCommunityIcons name = "bell"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        /> <
        Tab.Screen name = "Profile"
        component = { Profile }
        options = {
            {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => ( <
                    MaterialCommunityIcons name = "account"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        /> < /
        Tab.Navigator >
    );
}

export default function App() {
    return ( <
        NavigationContainer >
        <
        MyTabs / >
        <
        /NavigationContainer>
    );
}