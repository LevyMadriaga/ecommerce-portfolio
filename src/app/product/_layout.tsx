import { Stack } from "expo-router";

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[productId]"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
