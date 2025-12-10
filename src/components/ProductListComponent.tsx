import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
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
  const { products, refreshing, refresh, loadMore, loadingMore } =
    useProductListController();

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
      description={description}
      price={price}
    />
  );

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListItemComponent
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        refreshing={refreshing}
        onRefresh={refresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator style={{ marginVertical: 20 }} />
          ) : null
        }
      />
    </View>
  );
}
