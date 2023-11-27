import { create } from "zustand";

type uiState = {
  sideBar: boolean;
  setSideBar: () => void;
};

export const uiStore = create<uiState>((set, get) => ({
  sideBar: false,
  setSideBar: async () => {
    set((state) => ({ sideBar: !state.sideBar }));
  },
}));
