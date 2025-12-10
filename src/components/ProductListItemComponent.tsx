import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useProductListItemConmtroller from "./ProductListItemController";

interface ProductListItemComponentProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function ProductListItemComponent({
  id,
  title,
  image,
  description,
  price,
}: ProductListItemComponentProps) {
  const { handlePress, splitImage } = useProductListItemConmtroller(image);

  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={() => handlePress(id)}>
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
        <Text numberOfLines={1} style={styles.contentText}>
          Title: {title}
        </Text>
        <Text numberOfLines={1} style={styles.contentText}>
          Description: {description}
        </Text>
        <Text numberOfLines={1} style={styles.contentText}>
          Price: {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: "50%",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  listContainer: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 12,
  },
  contentText: { color: "black" },
});
