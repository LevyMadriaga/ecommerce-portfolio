import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CheckoutListItemComponentProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function CheckoutListItemComponent({
  title,
  image,
  description,
  price,
}: CheckoutListItemComponentProps) {
  const splitImage = image.split("/");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContent}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
      <View
        style={
          (styles.listContainer,
          { backgroundColor: `#${splitImage[splitImage.length - 2]}` })
        }
      >
        <Image
          source={{
            uri: image,
            width: 120,
            height: 120,
          }}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  listContainer: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 12,
  },
  listContent: {
    width: "65%",
    marginRight: 10,
  },
});
