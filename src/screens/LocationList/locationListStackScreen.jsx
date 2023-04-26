import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationListScreens } from "./LocationListScreens";
import { LocationDetailScreen } from "../LocationDetail/locationDetailScreen";
import { UserContext } from "../../contexts/UserContext";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./locationListScreens.styles";

const LocationListStack = createNativeStackNavigator();

export const LocationListStackScreens = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
          <LocationListStack.Screen
            name="ExportarLista"
            component={LocationListScreens}
          />
          <LocationListStack.Screen
            name="Detalle"
            component={LocationDetailScreen}
          />
        </LocationListStack.Navigator>
      ) : (
        <View style={styles.containerOff}>
          <Text style={styles.titleOff}>Debe Iniciar Sesion</Text>
        </View>
      )}
    </>
  );
};
