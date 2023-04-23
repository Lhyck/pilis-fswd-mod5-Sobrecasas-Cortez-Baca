import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationListScreen } from "./locationListScreens";
import { LocationDetailScreen } from "../LocationDetail/locationDetailScreen";

const LocationListStack = createNativeStackNavigator();

export const LocationListStackScreens = () => {
  return (
    <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
      <LocationListStack.Screen
        name="ExplorarLista"
        component={LocationListScreen}
      ></LocationListStack.Screen>
      <LocationListStack.Screen
        name="Detalle"
        componenet={LocationDetailScreen}
      ></LocationListStack.Screen>
    </LocationListStack.Navigator>
  );
};
