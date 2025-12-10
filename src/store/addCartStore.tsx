import { create } from "zustand";
import { ProductItem } from "./../types";

interface CartStore {
  cart: ProductItem[];
  addToCart: (item: ProductItem) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));
