import { IComercio, initDataComercio } from "@/interfaces/comercio";
import { IPerson } from "@/interfaces/person";
import { IRestaurant } from "@/interfaces/restaurant";
import apiInstance from "@/util/api";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type comercioState = {
  comercio: IComercio;
  list: IComercio[];
  loading: boolean;
  error: string;
  create: (person: IPerson, restaurant: IRestaurant) => void;
  getByPersonId: (person_id: string) => void;
  getById: (comercio_id: string) => void;
  setComercio: (comercio: IComercio) => void;
  updateCategoryProduct: (comercio: IComercio) => void;
};

const store: StateCreator<comercioState> = (set) => ({
  comercio: initDataComercio,
  list: [],
  loading: false,
  error: "",
  create: async (person: IPerson, restaurant: IRestaurant) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.post("/comercio/create", {
        person,
        restaurant,
      });

      const { data } = response;

      set((state) => ({
        ...state,
        loading: false,
        comercio: {
          ...state.comercio,
          comercio: data.comercio,
          user: data.user,
          person: data.person,
          restaurant: data.restaurant,
        },
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        loading: false,
        error: (error as Error).message,
      }));
    }
  },
  getByPersonId: async (person_id: string) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.get(
        "/comercio/getByPersonId/" + person_id
      );

      const { data } = response;
      set((state) => ({
        ...state,
        loading: false,
        list: data || [],
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        loading: false,
        error: (error as Error).message,
      }));
    }
  },
  getById: async (comercio_id: string) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.get(
        "/comercio/getById/" + comercio_id
      );

      const { data } = response;
      set((state) => ({
        ...state,
        loading: false,
        comercio: data || initDataComercio,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        loading: false,
        error: (error as Error).message,
      }));
    }
  },

  updateCategoryProduct: async (comercio: IComercio) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.post(
        "/comercio/updateCategoryProduct",
        { comercio }
      );

      const { data } = response;
      set((state) => ({
        ...state,
        loading: false,
        // comercio: data || initDataComercio,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        loading: false,
        error: (error as Error).message,
      }));
    }
  },
  setComercio: async (comercio: IComercio) => {
    set((state) => ({
      ...state,
      comercio: comercio || initDataComercio,
    }));
  },
});

export const comercioStore = create<comercioState>()(store);
