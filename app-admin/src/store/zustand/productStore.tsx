import { create } from "zustand";
import { IIngredient, IProduct, initData } from "@/interfaces/product";
import apiInstance from "@/util/api";

type productState = {
  product: IProduct;
  isValid: boolean;
  list: IProduct[];
  setProduct: (product: IProduct) => void;
  setIsValid: (isValid: boolean) => void;
  setAllProduct: (list: IProduct[]) => void;
  getAllByRestaurantId: (restaurant_id: string) => void;
  create: (
    restaurant_id: string,
    name: string,
    img: string,
    price: number,
    favorite: number,
    description: string,
    ingredients: IIngredient[]
  ) => void;

  loading: boolean;
  isError: boolean;
  error: string;
};

export const productStore = create<productState>((set, get) => ({
  product: initData,
  list: [],

  isValid: false,
  loading: false,
  isError: false,
  error: "",

  setProduct: async (product: IProduct) => {
    const validateForm = (
      form: Record<string, string | any>,
      requerid: string[]
    ) => {
      const requiredFields: string[] = requerid;
      const isFormValid = requiredFields.every(
        (field: string) => form[field] !== ""
      );
      return isFormValid;
    };

    set((state) => ({
      product: product,
      isValid:
        validateForm(product, ["name", "description", "price", "img"]) &&
        state.product.ingredients.length !== 0
          ? true
          : false,
    }));
  },

  setAllProduct: async (list: IProduct[]) => {
    set((state) => ({ list: list }));
  },

  setIsValid: async (isValid: boolean) => {
    set((state) => ({ isValid }));
  },

  getAllByRestaurantId: async (restaurant_id: string) => {
    try {
      set((state) => ({ ...state, loading: true }));
      const { data: response } = await apiInstance.get(
        "/product/getAllByRestaurantId/" + restaurant_id
      );

      const { data } = response;
      set((state) => ({ ...state, loading: false, list: data || [] }));
    } catch (error) {
      set((state) => ({
        ...state,
        isError: true,
        error: (error as Error).message,
        loading: false,
      }));
    }
  },

  create: async (
    restaurant_id: string,
    name: string,
    img: string,
    price: number,
    favorite: number,
    description: string,
    ingredients: IIngredient[]
  ) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.post("/product/create", {
        restaurant_id,
        name,
        img,
        price,
        favorite,
        description,
        ingredients,
      });

      const { data } = response;
      set((state) => ({ ...state, loading: false, list: data || [] }));
    } catch (error) {
      set((state) => ({
        ...state,
        isError: true,
        error: (error as Error).message,
        loading: false,
      }));
    }
  },
}));
