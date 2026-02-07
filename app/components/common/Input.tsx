import React from "react";
import { View, Text, StyleSheet, TextInput, StyleProp } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface Props {
  onChange: (text: string) => void;
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
  style?: StyleProp<ViewStyle>;
  isNumber?: boolean;
  value?: string | number;
}

export const Input: React.FC<Props> = ({
  onChange,
  label,
  placeholder,
  isTextArea,
  style,
  isNumber,
  value,
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={[styles.input, { height: isTextArea ? 100 : "auto" }]}
        placeholder={placeholder || ""}
        value={value?.toString() || ""}
        onChangeText={(v) => onChange(v)}
        multiline={isTextArea}
        numberOfLines={4}
        keyboardType={isNumber ? "numeric" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,

    width: "100%",
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 500,
    opacity: 0.8,
    marginBottom: 2,
  },
  input: {
    backgroundColor: "#FAFAFA",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
});
