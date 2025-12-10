import React from "react";
import { FlatList, View } from "react-native";
import useCheckoutListController from "./CheckoutListController";
import CheckoutListItemComponent from "./CheckoutListItemComponent";

interface ItemProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function CheckoutListComponent() {
  const { cart } = useCheckoutListController();
  const ListItemComponent = ({
    title,
    image,
    description,
    price,
  }: ItemProps) => (
    <CheckoutListItemComponent
      title={title}
      image={image}
      description={description}
      price={price}
    />
  );
  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
