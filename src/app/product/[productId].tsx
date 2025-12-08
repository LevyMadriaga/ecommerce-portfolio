import { Stack } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import useProductScreenController from "./ProductIdController";

export default function ProductScreen() {
  const { product } = useProductScreenController();

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const splitImage = product.image.split("/");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Stack.Screen options={{ title: `${product?.title}` }} />
      <View style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            backgroundColor: `#${splitImage[splitImage.length - 2]}`,
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: 200, marginTop: 20 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {product.title}
        </Text>
        <Text style={{ marginVertical: 10 }}>{product.description}</Text>
        <Text style={{ color: "green", fontSize: 18 }}>{product.price}</Text>
      </View>
    </View>
  );
}
