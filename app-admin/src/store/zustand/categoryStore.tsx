import { ICategory, initDataCatgory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { create } from "zustand";

import apiInstance from "@/util/api";
import { IComercio, initDataComercio } from "@/interfaces/comercio";

type categoryState = {
  comercio: IComercio;
  category: ICategory;
  getByComercioId: (comercio_id: string) => void;
  updateImg: (formData: FormData) => void;
  create: (
    name: string,
    img: string,
    comercio_id: string,
    classe: string,
    description: string,
    order: number
  ) => void;
  delete: (category_id: string) => void;

  isLoading: boolean;
  isError: boolean;
  error: string;
};

export const categoryStore = create<categoryState>((set, get) => ({
  comercio: initDataComercio,
  category: initDataCatgory,
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

      set((state) => ({
        isLoading: false,
        comercio: data || initDataComercio,
      }));
    } catch (error) {
      set((state) => ({
        isLoading: false,
        isError: true,
        error: (error as Error).message,
      }));
    }
  },

  create: async (
    name: string,
    img: string,
    comercio_id: string,
    classe: string,
    description: string,
    order: number
  ) => {
    try {
      set((state) => ({ isLoading: true }));

      const { data: response } = await apiInstance.post("/category/create", {
        name,
        img,
        comercio_id,
        classe,
        description,
        order,
      });

      const { data } = response;

      set((state) => ({
        isLoading: false,
        category: data || initDataCatgory,
      }));
    } catch (error) {
      set((state) => ({
        isLoading: false,
        isError: true,
        error: (error as Error).message,
      }));
    }
  },
  delete: async (category_id: string) => {
    try {
      set((state) => ({ isLoading: true }));

      const { data: response } = await apiInstance.delete(
        "/category/delete/" + category_id
      );

      const { data } = response;
      console.log(data);

      set((state) => ({
        isLoading: false,
      }));
    } catch (error) {
      set((state) => ({
        isLoading: false,
        isError: true,
        error: (error as Error).message,
      }));
    }
  },
}));
