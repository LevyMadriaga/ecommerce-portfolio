import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductItem } from "../types";
import { asyncStorageAdapter } from "../utils/zustandStorage";

export interface ProductStore {
  products: ProductItem[];
  setProducts: (
    products: ProductItem[] | ((prev: ProductItem[]) => ProductItem[])
  ) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) =>
        set((state) => ({
          products:
            typeof products === "function"
              ? products(state.products)
              : products,
        })),
    }),
    {
      name: "product-storage",
      storage: asyncStorageAdapter,
    }
  )
);

export default useProductStore;
