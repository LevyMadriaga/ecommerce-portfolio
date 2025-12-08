import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="tabs" options={{ title: "Home" }} />
      <Stack.Screen name="product" options={{ headerShown: false }} />
    </Stack>
  );
}
