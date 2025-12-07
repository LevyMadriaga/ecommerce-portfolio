import React from "react";
import { FlatList, View } from "react-native";
import useProductListController from "./ProductListController";
import ProductListItemComponent from "./ProductListItemComponent";
interface ItemProps {
  title: string;
  image: string;
}

export default function ProduListComponent() {
  const { products } = useProductListController();

  const ListItemComponent = ({ title, image }: ItemProps) => (
    <ProductListItemComponent title={title} imageUri={image} />
  );

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={products}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItemComponent title={item.title} image={item.thumbnailUrl} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
