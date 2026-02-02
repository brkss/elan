import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen name="add" options={{ title: "Add Products" }} />
    </Stack>
  );
}
