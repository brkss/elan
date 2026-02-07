import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
