import axios from "axios";
import { useEffect } from "react";
import useProductStore from "../store/productStore";

export default function useProductListController() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://mockerjson.xyz/api/v1/products"
        );
        if (data) {
          setProducts(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllProducts();
  }, []);

  return { products };
}
