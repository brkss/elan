import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";

export const ScanProduct: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [ready, setReady] = useState(false);
  const [mountError, setMountError] = useState<string | null>(null);

  // Optional: request on mount so you’re not relying on a button path
  useEffect(() => {
    if (permission && !permission.granted) requestPermission();
  }, [permission, requestPermission]);

  if (!permission)
    return <View style={{ flex: 1, backgroundColor: "black" }} />;

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.message}>
            We need your permission to show the camera
          </Text>
          <Button onPress={requestPermission} title="Grant permission" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <CameraView
          style={StyleSheet.absoluteFill}
          facing="back"
          onCameraReady={() => setReady(true)}
          onMountError={(e) => setMountError(e.message)}
        />

        {!ready && !mountError && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Starting camera…</Text>
          </View>
        )}

        {!!mountError && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Camera error: {mountError}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "black" },
  container: { flex: 1, backgroundColor: "black" },
  message: { textAlign: "center", paddingBottom: 10, color: "white" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayText: { color: "white" },
});
