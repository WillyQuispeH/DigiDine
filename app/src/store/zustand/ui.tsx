import { create } from "zustand";
import { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type uiState = {
  listFavoriteProduct: string[];

  addFavoriteProduct: (productId: string) => void;
};

const store: StateCreator<uiState> = (set) => ({
  listFavoriteProduct: [],

  addFavoriteProduct: async (productId: string) => {
    set((state) => {
      const { listFavoriteProduct } = state;
      if (!listFavoriteProduct.includes(productId)) {
        return {
          ...state,
          listFavoriteProduct: [...listFavoriteProduct, productId],
        };
      }
      return state;
    });
  },
});

export const uiStore = create<uiState>()(
  persist(store, { name: "gamanDigiDine" })
);
