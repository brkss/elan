import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "@/components/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Label } from "@react-navigation/elements";

const NutrionInfoForm: React.FC = () => {
  const [values, setValues] = React.useState<
    { label: string; value: number }[]
  >([{ label: "", value: 0 }]);

  const handleAddRecord = () => {
    setValues([
      ...values,
      {
        label: "",
        value: 0,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nutrition Information (per 100g)</Text>
      <View style={styles.formContainer}>
        <View style={{ width: "100%", flex: 1 }}>
          <Text style={{ opacity: 0.7, fontSize: 12 }}>label</Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text style={{ opacity: 0.7, fontSize: 12 }}>value</Text>
        </View>
      </View>
      {values.map((value, key) => (
        <View key={key} style={styles.formContainer}>
          <Input
            label={""}
            onChange={(v) => {}}
            placeholder={"label"}
            style={{ flex: 1 }}
            value={value.label}
          />
          <Input
            label={""}
            value={value.value}
            onChange={(v) => {}}
            placeholder={"value"}
            isNumber
            style={{ flex: 1 }}
          />
        </View>
      ))}
      <View style={{ flexDirection: "row", marginVertical: 12 }}>
        <TouchableOpacity style={styles.button} onPress={handleAddRecord}>
          <AntDesign
            name="plus"
            size={16}
            color="white"
            style={{ marginTop: 0 }}
          />
          <Text style={styles.buttonText}>Add Record</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NutrionInfoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontWeight: "500",
    fontSize: 14,
    marginVertical: 10,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    gap: 5,
  },
  buttonText: {
    color: "white",
    width: "auto",
    fontWeight: 600,
  },
});
