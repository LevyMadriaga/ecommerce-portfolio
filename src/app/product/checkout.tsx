import CheckoutListComponent from "@/src/components/CheckoutListComponent";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function ChekoutScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Checkout" }} />
      <CheckoutListComponent />
    </View>
  );
}
