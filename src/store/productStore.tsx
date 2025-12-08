import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductItem } from "../types";

interface ProductStore {
  products: ProductItem[];
  setProducts: (products: ProductItem[]) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products }),
    }),
    {
      name: "product-storage",
    }
  )
);

export default useProductStore;
