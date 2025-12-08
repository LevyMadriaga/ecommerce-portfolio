import { create } from "zustand";
import { ProductItem } from "../types";

interface ProductStore {
  products: ProductItem[];
  setProducts: (products: ProductItem[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductStore;
