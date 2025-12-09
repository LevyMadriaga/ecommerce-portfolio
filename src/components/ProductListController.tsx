import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useProductStore from "../store/productStore";

export default function useProductListController() {
  const { products, setProducts } = useProductStore();
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const fetchProducts = useCallback(
    async (pageNumber = 1) => {
      if (!hasMore) return;
      console.log(pageNumber);

      try {
        const res = await axios.get(
          `https://mockerjson.xyz/api/v1/products?page=${pageNumber}&limit=${limit}`
        );
        const newData = res.data.data;

        if (newData.length < limit) setHasMore(false);

        setProducts((prev) =>
          pageNumber === 1 ? newData : [...prev, ...newData]
        );
      } catch (error) {
        console.log(error);
      }
    },
    [hasMore, setProducts]
  );

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const loadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setPage((prev) => prev + 1);
    setLoadingMore(false);
  };

  const refresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchProducts(1);
    setRefreshing(false);
  };

  return {
    products,
    loadMore,
    refreshing,
    refresh,
    loadingMore,
  };
}
