import React from "react";
import { Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import { styles } from "./locationListScreens.styles";
import { data } from "../../api/data";

export const LocationListScreens = ({ navigation }) => {
  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Detalle", { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images[0]} style={styles.itemImage}></Image>
        <Text style={styles.itemTitle}> {item.title} </Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={location}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      ></FlatList>
    </SafeAreaView>
  );
};
