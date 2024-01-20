import { create } from "zustand";
import { IIngredient, IProduct, initData } from "@/interfaces/product";
import apiInstance from "@/utils/api";
import { StateCreator } from "zustand";

type productState = {
  product: IProduct;
  list: IProduct[];

  addFavorite: (productId: string) => void;
  reset: () => void;

  loading: boolean;
  isError: boolean;
  error: string;
};

const store: StateCreator<productState> = (set) => ({
  product: initData,
  list: [],

  loading: false,
  isError: false,
  error: "",

  addFavorite: async (product_id: string) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.post(
        "/product/addFavorite",
        { product_id }
      );

      set((state) => ({
        ...state,
        loading: false,
        product: response.data,
      }));

      const miFuncion = () => {
        set((state) => ({
          ...state,
          loading: false,
          product: initData,
        }));
      };
      const timeoutId = setTimeout(miFuncion, 1000);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      set((state) => ({
        ...state,
        isError: true,
        error: (error as Error).message,
        loading: false,
      }));
    }
  },
  reset: async () => {
    set((state) => ({
      ...state,
      product: initData,
    }));
  },
});

export const productStore = create<productState>()(store);
