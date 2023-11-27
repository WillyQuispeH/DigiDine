import { create } from "zustand";
import { IProduct, initData } from "@/interfaces/product";

type productState = {
  product: IProduct;
  setProduct: (product: IProduct) => void;
  create: () => void;
};

export const productStore = create<productState>((set, get) => ({
  product: initData,
  setProduct: async (product: IProduct) => {
    set((state) => ({ product: product }));
  },
  create: async () => {},
}));
