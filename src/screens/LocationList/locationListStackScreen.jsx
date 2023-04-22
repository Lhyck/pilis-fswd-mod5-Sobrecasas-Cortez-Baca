import react from "react";
import { LocationDetailScreen } from "../LocationDetail/locationDetailScreen";
import { LocationListScreens } from "./locationListScreens";
import  { createNativeStackNavigator} from "@react-navigation/native-stack"

const LocationListStack = createNativeStackNativeNavigator ()

export const LocationListStackScreens = () => {
return (
    <LocationListStack.Navigator screenOptions = { {headerShown: false}}>
              <LocationListStack.Screen name='ExplorarLista' component={LocationListScreen} ></LocationListStack.Screen>
    <LocationListStack.Screen name='Detalle' componenet={LocationDetailScreen}></LocationListStack.Screen>
    </LocationListStack.Navigator>
)
}