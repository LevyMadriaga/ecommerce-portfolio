import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import useProductListItemConmtroller from "./ProductListItemController";

interface ProductListItemComponentProps {
  id: number;
  title: string;
  image: string;
  descroption: string;
  price: string;
}

export default function ProductListItemComponent({
  id,
  title,
  image,
  descroption,
  price,
}: ProductListItemComponentProps) {
  const { handlePress } = useProductListItemConmtroller();
  const splitImage = image.split("/");
  return (
    <View style={{ width: "50%", paddingHorizontal: 8 }}>
      <TouchableOpacity onPress={() => handlePress(id)}>
        <View
          style={{
            width: "100%",
            backgroundColor: `#${splitImage[splitImage.length - 2]}`,
            borderRadius: 10,
            marginBottom: 12,
          }}
        >
          <Image
            source={{
              uri: image,
              width: 120,
              height: 120,
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={1} style={{ color: "black" }}>
          Title: {title}
        </Text>
        <Text numberOfLines={1} style={{ color: "black" }}>
          Description: {descroption}
        </Text>
        <Text numberOfLines={1} style={{ color: "black" }}>
          Price: {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
