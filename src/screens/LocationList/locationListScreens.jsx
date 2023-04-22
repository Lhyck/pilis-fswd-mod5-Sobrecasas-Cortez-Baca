import react from "react";
import { Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import { styles } from "./locationListScreens.styles";
import { data } from "../../api/data"


export const LocationListScreens  = ( [navigation]) =>{

    const location = ({item}) => (
        <Pressable onPress= {() => navigation.navigate ('Detalle', { item })}>
        <View style = {style.ItemContainer}>
           <image source = {Item.images [0]} style= {style.Images}></image>
           <text style = {style.ItemTitle} > {ItemTitle} </text>
           <text style = {style.ItemPrice}>{ItemPrice}</text>
        </View>
        </Pressable>
    )
    return(
        <SafeAreaView style = {style.container}> 
     <FlatList
           data={data}
           renderItem={location}
           keyExtractor= {item => Item.id}
           style={style.ItemList}
           >

     </FlatList>
        </SafeAreaView>
    )
}
