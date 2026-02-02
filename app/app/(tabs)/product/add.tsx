import { View, Text, StyleSheet } from "react-native";

export default function Add() {
  return (
    <View style={styles.container}>
      <Text>Add Product Here</Text>
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
