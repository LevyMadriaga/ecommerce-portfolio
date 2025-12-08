import { useRouter } from "expo-router";

export default function useProductListItemConmtroller() {
  const router = useRouter();
  const handlePress = (productId: number) => {
    router.navigate({
      pathname: `./product/${productId}`,
      params: { id: productId },
    });
  };

  return { handlePress };
}
