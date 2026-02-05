import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Graph } from "@/components/Graph";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MealThumbnail } from "@/components/Meal";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.insightHeader}>
          <Text style={styles.title}>Insights</Text>
          <TouchableOpacity style={styles.addRecordButton}>
            <AntDesign name="plus" size={15} color="white" />
            <Text style={styles.addRecordButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <Graph />
        <View style={styles.latestMealContainer}>
          <Text style={styles.title}>Latest Meals</Text>
          <View style={{ height: 20 }} />
          <MealThumbnail />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f2f3",
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
  },
  latestMealContainer: {
    marginTop: 20,
  },
  insightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 10,
  },
  addRecordButton: {
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 7,
    height: "auto",
    borderRadius: 8,
    flexDirection: "row",
    gap: 5,
    alignItems: "baseline",
  },
  addRecordButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
});
