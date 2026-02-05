import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export const Graph: React.FC = () => {
  const { width } = useWindowDimensions();
  const data = [
    { value: 50, label: "00:15" },
    { value: 80, label: "00:20" },
    { value: 90, label: "00:25" },
    { value: 70, label: "00:30" },
    { value: 70, label: "00:35" },
    { value: 70, label: "00:40" },
    { value: 50, label: "00:45" },
    { value: 80, label: "00:50" },
    { value: 90, label: "00:55" },
    { value: 50, label: "01:15" },
    { value: 80, label: "01:20" },
    { value: 90, label: "01:25" },
    { value: 70, label: "01:30" },
    { value: 70, label: "01:35" },
    { value: 70, label: "01:40" },
    { value: 50, label: "01:45" },
    { value: 80, label: "01:50" },
    { value: 90, label: "01:55" },
  ];

  return (
    <View style={styles.container}>
      <LineChart
        // FIX 1: Set width to screen width so the library handles overflow scrolling
        width={width}
        // FIX 2: Add spacing at the end so the last label isn't cut off
        endSpacing={20}
        initialSpacing={20} // Optional: Adds breathing room at the start
        data={data}
        disableScroll={false}
        curved
        curvature={0.2}
        //areaChart
        thickness={3}
        color="black"
        dataPointsColor="black"
        dataPointsRadius={4}
        focusEnabled
        showStripOnFocus
        stripColor="rgba(0,0,0,0.15)"
        stripWidth={1}
        showTextOnFocus
        textFontSize={12}
        textColor="#111827"
        focusedDataPointColor="#111827"
        focusedDataPointRadius={6}
        hideRules
        hideYAxisText
        yAxisThickness={0}
        pointerConfig={{
          pointerStripUptoDataPoint: true,
          pointerStripColor: "rgba(0,0,0,0.15)",
          pointerStripWidth: 1,
          pointerColor: "#111827",
          radius: 6,
          pointerLabelComponent: (items: any) => {
            const item = items?.[0];
            if (!item) return null;
            return (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>{item.label}</Text>
                <Text style={styles.tooltipValue}>{item.value}</Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Ensuring the container doesn't restrict layout,
    // though the chart handles its own dimensions mostly.
    //flex: 1,
    //justifyContent: "center",
  },
  tooltip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },
  tooltipText: { fontSize: 11, color: "#6B7280" },
  tooltipValue: { fontSize: 14, fontWeight: "600", color: "#111827" },
  selectedText: { marginTop: 12, color: "#111827" },
});
