import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const MealThumbnail: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Chia-pudding-1667b59.jpg?resize=768,713",
        }}
        contentFit="contain"
        contentPosition="left"
        placeholder={blurhash}
      />
      <View style={styles.mealInfoContainer}>
        <View>
          <Text style={styles.mealTitle}>Breakfast 101 help</Text>
          <Text style={styles.carbInfo}>Total Carbs : 140g</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.label,
              {
                backgroundColor: true ? "#06d6a0" : "#ffb700",
              },
            ]}
          >
            {true ? "High Carbs" : "Low Carbs"}
          </Text>
          <View>
            <FontAwesome6 name="arrow-right" size={20} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    padding: 7,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    borderRadius: 16,
  },
  mealInfoContainer: {
    justifyContent: "space-between",
    paddingBottom: 5,
    flex: 1,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  carbInfo: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 5,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
  },
  label: {
    //color: "white",
    alignSelf: "flex-start",
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
