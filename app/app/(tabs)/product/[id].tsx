import React, { act } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";

const product = {
  title: "Tomato Ketchup – Heinz – 800ml",
  image:
    "https://images.openfoodfacts.org/images/products/000/005/045/7236/front_en.48.400.jpg",
  description: `Vegetarian, No gluten, No artificial flavors, No artificial preservatives, Vegan, Green Dot, No artificial colors`,
  nutrition: {},
};

const _product = {
  code: "737628064502",
  status: 1,
  status_verbose: "product found",
  product: {
    product_name: "Organic Dark Chocolate",
    brands: "Example Brand",
    quantity: "100 g",
    categories: "Snacks, Sweets, Chocolate, Dark Chocolate",
    countries: "United States",
    ingredients_text: "Organic cocoa mass, organic sugar, organic cocoa butter",
    allergens: "",
    labels: "Organic, Fair Trade",
    nutriscore_grade: "c",
    nutrition_grades_tags: ["c"],
    nutriments: [
      {
        label: "Energy kcal",
        value: 550,
      },
      {
        label: "fat",
        value: "42,",
      },
      {
        label: "carbohydrates",
        value: 46,
      },
      {
        label: "sugar",
        value: 24,
      },
      {
        label: "saturated fats",
        value: 24,
      },
      {
        label: "protein",
        value: 20,
      },
      {
        label: "fiber",
        value: 11,
      },
    ],
    ingredients: [
      { text: "cocoa mass", vegan: "yes", vegetarian: "yes" },
      { text: "sugar", vegan: "yes", vegetarian: "yes" },
      { text: "cocoa butter", vegan: "yes", vegetarian: "yes" },
    ],
    image_url:
      "https://images.openfoodfacts.org/images/products/737/628/064/502/front_en.4.full.jpg",
    ecoscore_grade: "b",
    packaging: "Wrapper",
    serving_size: "25 g",
  },
};

const _actions = [
  {
    text: "Mark as unsafe",
    color: "#FD853A",
    action: "MARK_AS_UNSAFE",
  },
  {
    text: "Mark as Not Recommended",
    color: "#BDB4FE",
    action: "MARK_AS_NOT_RECOMMENDED",
  },
  {
    text: "Mark as Suspecious",
    color: "#FEA3B4",
    action: "MARK_AS_SUSPECIOUS",
  },
];

export default function ProductDetails() {
  const { width } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          style={[{ width: width, height: width }, styles.image]}
          source={{
            uri: product.image,
          }}
          contentFit="contain"
          contentPosition="center"
          placeholder={blurhash}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign
              name="plus"
              size={16}
              color="white"
              style={{ marginTop: 2 }}
            />
            <Text style={styles.actionButtonText}>Add to Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign
              name="plus"
              size={16}
              color="white"
              style={{ marginTop: 2 }}
            />
            <Text style={styles.actionButtonText}>Add to Meal</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.actionContainer}
        >
          {_actions.map((action, key) => (
            <TouchableOpacity
              key={key}
              style={[styles.button, { backgroundColor: action.color }]}
            >
              <Text style={styles.buttonText}>{action.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.informationsContainer}>
          <Text style={styles.title}>{_product.product.product_name}</Text>
          <Text style={styles.description}>{_product.code}</Text>

          <View>
            <Text style={styles.descriptionTitle}>Ingredients</Text>
            <Text style={styles.description}>
              {_product.product.ingredients_text}
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionTitle}>Categories</Text>
            <Text style={styles.description}>
              {_product.product.ingredients_text}
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionTitle}>Labels</Text>
            <Text style={styles.description}>{_product.product.labels}</Text>
          </View>
        </View>
        <View style={styles.nutritionContainer}>
          <Text style={styles.descriptionTitle}>Nutritions</Text>
          {_product.product.nutriments.map((n, key) => (
            <View
              style={[
                styles.nutrition,
                { backgroundColor: key % 2 === 0 ? "#e8e8e8" : "transparent" },
              ]}
              key={key}
            >
              <Text style={styles.nutritionTitle}>{n.label}</Text>
              <Text style={styles.nutritionValue}>{n.value}g</Text>
            </View>
          ))}
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    //justifyContent: "center",
    //backgroundColor: "red",
  },
  buttonContainer: {
    padding: 20,
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,

    justifyContent: "space-between",
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
  image: {
    //width: 100,
    //height: 100,
    aspectRatio: 1,
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  informationsContainer: {
    marginTop: 0,
    padding: 20,
  },
  title: {
    fontWeight: 600,
    fontSize: 22,
    marginBottom: 10,
  },
  descriptionTitle: {
    fontWeight: 700,
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 0,
  },
  actionContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
    paddingVertical: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 400,
    opacity: 0.7,
  },
  nutritionContainer: {
    paddingTop: 0,
    padding: 20,
  },
  nutrition: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 5,
  },
  nutritionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: 500,
  },
});
