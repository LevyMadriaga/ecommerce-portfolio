import { useCartStore } from "@/src/store/addCartStore";
import useProductStore from "@/src/store/productStore";
import { ProductItem } from "@/src/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

export default function useProductScreenController() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const products = useProductStore((state) => state.products);
  const router = useRouter();
  const [product, setProduct] = useState<ProductItem | undefined>();
  const addCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct);
  }, [id, products]);

  const onPressCart = useCallback(() => {
    if (!product) return;

    addCart(product);
    Alert.alert("Check mo nasa Cart na nandon na");
  }, [addCart, product]);

  const onPressIconCart = () => {
    router.navigate({
      pathname: "/product/checkout",
    });
  };

  return { product, onPressCart, onPressIconCart, cart };
}
