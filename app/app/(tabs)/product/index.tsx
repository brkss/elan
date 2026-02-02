import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductItem } from "@/components/Product/ProductItem";
import { _products } from "@/utils/data/product";
import { SearchBar } from "react-native-screens";
export default function Product() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.productContainer}
        >
          <Text style={styles.title}>My Products</Text>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search Products (title, ID or Barcode..."
              style={styles.searchInput}
            />
          </View>
          {_products.map((product, key) => (
            <ProductItem key={key} product={product} />
          ))}
        </ScrollView>
        {/*<Button
          title="Add Product"
          onPress={() => router.push("/(tabs)/product/add")}
        />*/}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f2f3",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  productContainer: {
    marginTop: 0,
    height: "100%",
  },
  searchBox: {
    marginVertical: 20,
  },
  searchInput: {
    backgroundColor: "white",
    opacity: 0.8,
    padding: 15,
    borderRadius: 10,
  },
});
