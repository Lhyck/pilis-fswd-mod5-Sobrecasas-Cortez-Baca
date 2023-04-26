import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationListScreens } from "./LocationListScreens";
import { LocationDetailScreen } from "../LocationDetail/locationDetailScreen";

const LocationListStack = createNativeStackNavigator();

export const LocationListStackScreens = () => {
  return (
    <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
      <LocationListStack.Screen
        name="ExportarLista"
        component={LocationListScreens}
      />
      <LocationListStack.Screen name="Detalle" component={LocationDetailScreen}/>
    </LocationListStack.Navigator>
  )
};
