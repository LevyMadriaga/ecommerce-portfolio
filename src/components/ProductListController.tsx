import axios from "axios";
import { useEffect, useState } from "react";

interface Products {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function useProductListController() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllProducts();
  }, []);

  return { products };
}
