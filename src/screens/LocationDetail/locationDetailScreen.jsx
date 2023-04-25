import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./locationDetailScreen.styles";
import { IcoIcons } from "@expo/vector-icons";
import { Colors } from "../../utils/theme";

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <image
              key={idx}
              source={image}
              style={styles.image}
              resizaMode="conver"
            ></image>
          ))}
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.raitingContainer}>
          <IcoIcons name="star" size={20} color={COLORS.primary}></IcoIcons>
          <Text style={styles.descripton}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
