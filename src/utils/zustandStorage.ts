import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistStorage, StorageValue } from "zustand/middleware";
import { ProductStore } from "../store/productStore";

export const asyncStorageAdapter: PersistStorage<ProductStore> = {
  setItem: async (name: string, value: StorageValue<ProductStore>) => {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    await AsyncStorage.setItem(name, stringValue);
  },

  getItem: async (name: string): Promise<StorageValue<ProductStore> | null> => {
    const value = await AsyncStorage.getItem(name);
    return (value as unknown as StorageValue<ProductStore>) ?? null;
  },

  removeItem: async (name: string) => {
    await AsyncStorage.removeItem(name);
  },
};
