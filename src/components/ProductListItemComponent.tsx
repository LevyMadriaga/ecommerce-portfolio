import React from "react";
import { Image, Text, View } from "react-native";

interface ProductListItemComponentProps {
  title: string;
  imageUri: string;
}

export default function ProductListItemComponent({
  title,
  imageUri,
}: ProductListItemComponentProps) {
  return (
    <View style={{ width: "50%", paddingHorizontal: 8 }}>
      <View
        style={{
          width: 150,
          alignItems: "center",
          margin: 5,
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/150/150" }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 8,
          }}
        />
      </View>
      <Text numberOfLines={1} style={{ color: "black" }}>
        Title: {title}
      </Text>
    </View>
  );
}
