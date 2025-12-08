import React from "react";
import { FlatList, View } from "react-native";
import useProductListController from "./ProductListController";
import ProductListItemComponent from "./ProductListItemComponent";
interface ItemProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function ProduListComponent() {
  const { products } = useProductListController();

  const ListItemComponent = ({
    id,
    title,
    image,
    description,
    price,
  }: ItemProps) => (
    <ProductListItemComponent
      id={id}
      title={title}
      image={image}
      descroption={description}
      price={price}
    />
  );

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={products}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItemComponent
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
