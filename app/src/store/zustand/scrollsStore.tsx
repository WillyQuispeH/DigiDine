import { create } from "zustand";
import { StateCreator } from "zustand";

type scrollState = {
  scroll: boolean;
  setScroll: (scroll: boolean) => void;
};

const store: StateCreator<scrollState> = (set) => ({
  scroll: true,

  setScroll: async (scroll: boolean) => {
    set((state) => ({
      ...state,
      scroll,
    }));
  },
});

export const scrollStore = create<scrollState>()(store);
