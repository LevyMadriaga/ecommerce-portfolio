import useProductStore from "@/src/store/productStore";
import { ProductItem } from "@/src/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useProductScreenController() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const products = useProductStore((state) => state.products);
  const [product, setProduct] = useState<ProductItem | undefined>();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct);
  }, [id, products]);

  return { product };
}
