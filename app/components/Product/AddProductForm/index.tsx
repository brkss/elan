import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/components/common/Input";
import NutrionInfoForm from "./NutritionInfo";
import { Button } from "@/components/common";

export const AddPoductForm: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>Select Image</Text>
        </View>
        <Input
          label={"Product Title"}
          onChange={(v) => {}}
          placeholder="Product Title"
        />
        <Input
          label={"Product Description"}
          onChange={(v) => {}}
          placeholder="Product Description"
          isTextArea
        />
        <NutrionInfoForm />
        <View style={{ height: 20 }} />
        <Button text="Save Product" onClick={() => {}} />
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {},
  imagePlaceholder: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#dbdbdb",
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderText: {
    opacity: 0.8,
    fontSize: 16,
  },
});
