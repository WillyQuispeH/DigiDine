import { IProduct } from "@/interfaces/product";
import { create } from "zustand";

type uiState = {
  sideBar: boolean;
  modal: boolean;
  productList: IProduct[];
  stage: string;
  setSideBar: () => void;
  setModal: () => void;
  setProduct: (productList: IProduct[]) => void;
  setStage: (stage: string) => void;
};

export const uiStore = create<uiState>((set, get) => ({
  sideBar: false,
  modal: false,
  stage: "product",
  productList: [],

  setSideBar: async () => {
    set((state) => ({ ...state, sideBar: !state.sideBar }));
  },
  setStage: async (stage: string) => {
    set((state) => ({ ...state, stage: stage }));
  },
  setModal: async () => {
    set((state) => ({ ...state, modal: !state.modal }));
  },

  setProduct: async (productList: IProduct[]) => {
    set((state) => ({ productList: productList }));
  },
}));
