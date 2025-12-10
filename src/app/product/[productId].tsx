import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useProductScreenController from "./ProductIdController";

export default function ProductScreen() {
  const { product, onPressCart, onPressIconCart, cart } =
    useProductScreenController();

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const splitImage = product.image.split("/");

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${product?.title}`,
          headerRight: () => (
            <TouchableOpacity onPress={onPressIconCart}>
              <View style={{ marginRight: 15 }}>
                <Ionicons
                  name="cart"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                  onPress={onPressIconCart}
                />
                {cart.length > 0 && (
                  <View style={styles.badgeIcon}>
                    <Text style={styles.badgeIconStyle}>{cart.length}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.listContainer}>
        <View
          style={
            (styles.imageContainer,
            {
              backgroundColor: `#${splitImage[splitImage.length - 2]}`,
            })
          }
        >
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity onPress={onPressCart}>
          <Text>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginVertical: 10,
  },
  price: {
    color: "green",
    fontSize: 18,
  },
  badgeIcon: {
    position: "absolute",
    top: -2,
    right: 4,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeIconStyle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
