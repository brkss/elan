import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";

export const ScanProduct: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [last, setLast] = useState<BarcodeScanningResult | null>(null);
  const [mountError, setMountError] = useState<string | null>(null);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  if (!permission)
    return <View style={{ flex: 1, backgroundColor: "black" }} />;

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.text}>We need camera permission to scan.</Text>
          <Button title="Grant permission" onPress={requestPermission} />
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
          barcodeScannerSettings={{
            barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "code128", "qr"],
          }}
          onBarcodeScanned={(result) => {
            if (scanned) return; // prevent repeated fires
            setScanned(true);
            setLast(result);
            console.log("Scanned:", result.type, result.data);
            // TODO: lookup product with result.data
          }}
          onMountError={(e) => setMountError(e.message)}
        />

        {/* Center scan rectangle overlay */}
        <View style={styles.scanOverlay}>
          {/* Darken outside area */}
          <View style={styles.scanBox} />
        </View>

        {/* Bottom info + actions */}
        <View style={styles.bottom}>
          {mountError ? (
            <Text style={styles.text}>Camera error: {mountError}</Text>
          ) : last ? (
            <Text style={styles.text}>Scanned: {last.data}</Text>
          ) : (
            <Text style={styles.text}>Align the barcode inside the box</Text>
          )}

          {scanned && (
            <Button
              title="Scan again"
              onPress={() => {
                setScanned(false);
                setLast(null);
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "black" },
  container: { flex: 1, backgroundColor: "black" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: "white", textAlign: "center" },

  // Overlay that darkens the screen and centers the scan box
  scanOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  // The scan rectangle
  scanBox: {
    width: 260,
    height: 160,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 12,
    backgroundColor: "transparent",
  },

  bottom: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    alignItems: "center",
    gap: 12,
  },
});
