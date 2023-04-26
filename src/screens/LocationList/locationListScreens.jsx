import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable, Image } from "react-native";
import { styles } from "./locationListScreens.styles";
import { data } from "../../api/data";
import { SearchBar } from "../../components/SearchBar";
import { getLocationList } from '../../api/location.service'
export const LocationListScreens = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [locationList, setLocationList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredLocations = locationList.filter(location => (
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getLocationList()
      .then(data => {
        setLocationList(data)
      })
      .catch(err => console.log(err))
  }, [])
  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Detalle', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images[0]} style={styles.itemImage}>
          {console.log(item.images[0]+"asd"+item.id)}
        </Image>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={location}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      ></FlatList>
    </SafeAreaView>
  );
};
