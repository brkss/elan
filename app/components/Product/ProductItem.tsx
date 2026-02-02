import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const ProductItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.openfoodfacts.org/images/products/000/005/045/7236/front_en.48.400.jpg",
        }}
        contentFit="contain"
        contentPosition="left"
        placeholder={blurhash}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Tomato Ketchup – Heinz – 800ml</Text>
        <Text>Carbs : 23.3 g / 100g</Text>
        <Text
          style={[
            {
              backgroundColor: "#06d6a0",
              //color: "white",
              alignSelf: "flex-start",
              padding: 2,
              paddingHorizontal: 5,
              borderRadius: 5,
            },
          ]}
        >
          SAFE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fefefe",
    borderRadius: 13,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 0,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
});
