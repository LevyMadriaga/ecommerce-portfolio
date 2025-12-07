import React from "react";
import { Text } from "react-native";

interface ProductListItemComponentProps {
  title: string;
}

export default function ProductListItemComponent({
  title,
}: ProductListItemComponentProps) {
  return (
    <>
      <Text>{title}</Text>
    </>
  );
}
