import { useRouter } from "expo-router";

export default function useProductListItemConmtroller(image: string) {
  const router = useRouter();
  const splitImage = image.split("/");
  const handlePress = (productId: number) => {
    router.navigate({
      pathname: `./product/${productId}`,
      params: { id: productId },
    });
  };

  return { handlePress, splitImage };
}
