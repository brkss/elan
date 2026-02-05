import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScanProduct } from "@/components/Product/ScanProduct";

enum State {
  SCAN = "SCAN",
  MANUAL_ENTRY = "MANUAL_ENTRY",
}

export default function Add() {
  const [state, setState] = React.useState<State>(State.SCAN);

  return (
    <View style={styles.container}>
      {/* Scanner */}
      {state === State.SCAN && <ScanProduct />}

      {/* Top navigation overlay */}
      <SafeAreaView style={styles.navigation} pointerEvents="box-none">
        <View style={styles.navContent}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => setState(State.SCAN)}
          >
            <Text
              style={[
                styles.navigationButtonText,
                state === State.SCAN ? styles.scanText : styles.manualText,
                { opacity: state === State.SCAN ? 0.7 : 1 },
              ]}
            >
              Scan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => setState(State.MANUAL_ENTRY)}
          >
            <Text
              style={[
                styles.navigationButtonText,
                state === State.MANUAL_ENTRY
                  ? styles.manualText
                  : styles.scanText,
                { opacity: state === State.MANUAL_ENTRY ? 0.7 : 1 },
              ]}
            >
              Manual
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  navigation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  navContent: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingVertical: 12,
    backgroundColor: "transparent",
  },

  navigationButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  navigationButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  // White text with mild shadow for scan mode
  scanText: {
    color: "white",
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  // Black text for manual mode
  manualText: {
    color: "black",
  },
});
