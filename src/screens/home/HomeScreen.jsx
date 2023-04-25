import React from "react";
import { Text, View, ScrollView, Image, FlatList } from "react-native";
import { styles } from "./HomeScreen.styles";
import { regiones } from "../../api/data";

export const HomeScreen = () => {
  const region = ({ item }) => (
    <View style={styles.region}>
      <Image source={item.images} style={styles.imageRegion} />
      <View style={styles.regionContent}>
        <Text style={styles.descriptionTitle}>{item.title}</Text>
        <Text style={styles.descriptionRegion}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Descubre los mejores Eventos!</Text>
      <FlatList
        horizontal
        pagingEnabled
        data={regiones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={region}
      />
      <Text style={styles.titleCentral}>
        Conéctate con lo auténtico, con la energía pura de una tierra
        extraordinaria.
      </Text>
      <Image
        source={require("../../../assets/images/home/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
