import { useCartStore } from "../store/addCartStore";

export default function useCheckoutListController() {
  const cart = useCartStore((state) => state.cart);

  return { cart };
}
