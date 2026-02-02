import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { IProduct } from "@/utils/types/Product";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface Props {
  product: IProduct;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
        contentFit="contain"
        contentPosition="left"
        placeholder={blurhash}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text>Carbs : {product.carbs} g / 100g</Text>
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.label,
              {
                backgroundColor: product.isSafe ? "#06d6a0" : "#ffb700",
              },
            ]}
          >
            {product.isSafe ? "Gluten Free" : "Not Gluten Free"}
          </Text>
          <Text
            style={[
              styles.label,
              {
                backgroundColor: product.isHighCarb ? "#06d6a0" : "#ffb700",
              },
            ]}
          >
            {product.isHighCarb ? "High Carbs" : "Low Carbs"}
          </Text>
        </View>
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
    marginBottom: 15,
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
  labelContainer: {
    flexDirection: "row",
    gap: 5,
  },
  label: {
    //color: "white",
    alignSelf: "flex-start",
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
