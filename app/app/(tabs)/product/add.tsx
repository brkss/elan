import { View, Text, StyleSheet } from "react-native";
import { ScanProduct } from "@/components/Product/ScanProduct";

export default function Add() {
  return (
    <View style={styles.container}>
      <ScanProduct />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
