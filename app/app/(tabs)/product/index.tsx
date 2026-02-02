import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductItem } from "@/components/Product/ProductItem";
export default function Product() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>My Products</Text>
        <View style={styles.productContainer}>
          <ProductItem />
        </View>
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
    marginTop: 20,
  },
});
