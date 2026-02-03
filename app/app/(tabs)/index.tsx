import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Graph } from "@/components/Graph";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Graph />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: 600,
    fontSize: 35,
  },
});
