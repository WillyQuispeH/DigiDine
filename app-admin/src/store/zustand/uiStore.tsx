import { ICategoryListUi, Icategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { create } from "zustand";

type uiState = {
  sideBar: boolean;
  categoryList: ICategoryListUi[];
  productList: IProduct[];
  setSideBar: () => void;
  setCategory: (categoryList: ICategoryListUi[]) => void;
  setProduct: (productList: IProduct[]) => void;
};

export const uiStore = create<uiState>((set, get) => ({
  sideBar: false,
  categoryList: [],
  productList: [
    {
      product: {
        id: "asdasd1",
        name: "producto 1",
        img: "/food.jpg",
        price: 2000,
      },
      ingredients: [],
      category: [],
    },
    {
      product: {
        id: "asdasd2",
        name: "producto 2",
        img: "/food.jpg",
        price: 10000,
      },
      ingredients: [],
      category: [],
    },
    {
      product: {
        id: "asdasd3",
        name: "producto 3",
        img: "/food.jpg",
        price: 5500,
      },
      ingredients: [],
      category: [],
    },
    {
      product: {
        id: "asdasd4",
        name: "producto 4",
        img: "/food.jpg",
        price: 6000,
      },
      ingredients: [],
      category: [],
    },
    {
      product: {
        id: "asdasd5",
        name: "producto 5",
        img: "/food.jpg",
        price: 5000,
      },
      ingredients: [],
      category: [],
    },
    {
      product: {
        id: "asdasd6",
        name: "producto 6",
        img: "/food.jpg",
        price: 8000,
      },
      ingredients: [],
      category: [],
    },
  ],

  setSideBar: async () => {
    set((state) => ({ sideBar: !state.sideBar }));
  },

  setCategory: async (categoryList: ICategoryListUi[]) => {
    set((state) => ({ categoryList: categoryList }));
  },

  setProduct: async (productList: IProduct[]) => {
    set((state) => ({ productList: productList }));
  },
}));
