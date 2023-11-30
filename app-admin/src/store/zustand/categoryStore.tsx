import { ICategoryListUi, Icategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { create } from "zustand";

import apiInstance from "@/util/api";

type categoryState = {
  categoryList: ICategoryListUi[];
  getByComercioId: (comercio_id: string) => void;
  updateImg: (formData: FormData) => void;

  isLoading: boolean;
  isError: boolean;
  error: string;
};

export const categoryStore = create<categoryState>((set, get) => ({
  categoryList: [],
  isLoading: false,
  isError: false,
  error: "",

  getByComercioId: async (comercio_id: string) => {
    try {
      set((state) => ({ isLoading: true }));
      const { data: response } = await apiInstance.get(
        "/category/getByComercioId/" + comercio_id
      );

      const { data } = response;
      set((state) => ({ isLoading: false, categoryList: data || [] }));
    } catch (error) {
      set((state) => ({
        isLoading: false,
        isError: true,
        error: (error as Error).message,
      }));
    }
  },
  updateImg: async (formData: FormData) => {
    try {
      set((state) => ({ isLoading: true }));

      const { data: response } = await apiInstance.post(
        "/category/updateImg",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { data } = response;
      console.log(data);

      set((state) => ({ isLoading: false, categoryList: data || [] }));
    } catch (error) {
      set((state) => ({
        isLoading: false,
        isError: true,
        error: (error as Error).message,
      }));
    }
  },
}));
