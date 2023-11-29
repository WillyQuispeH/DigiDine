import { Icategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { create } from "zustand";

type uiState = {
  sideBar: boolean;
  categoryList: Icategory[];
  productList: IProduct[];
  setSideBar: () => void;
  setCategory: (categoryList: Icategory[]) => void;
  setProduct: (productList: IProduct[]) => void;
};

export const uiStore = create<uiState>((set, get) => ({
  sideBar: false,
  categoryList: [
    { id: "1", name: "John" },
    { id: "2", name: "Sarah" },
    { id: "3", name: "Paul" },
    { id: "4", name: "Paul" },
  ],
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
  setCategory: async (categoryList: Icategory[]) => {
    set((state) => ({ categoryList: categoryList }));
  },
  setProduct: async (productList: IProduct[]) => {
    set((state) => ({ productList: productList }));
  },
}));
