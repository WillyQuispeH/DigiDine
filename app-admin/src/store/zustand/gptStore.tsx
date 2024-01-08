import apiInstance from "@/util/api";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type gptState = {
  completions: () => void;

  loading: boolean;
};

const store: StateCreator<gptState> = (set) => ({
  loading: false,

  completions: async () => {
    set((state) => ({ ...state, loading: true }));

    const { data } = await apiInstance.post("/gpt/completions");

    console.log(data);

    set((state) => ({ ...state, loading: false, file: data.data }));
  },
});

export const gptStore = create<gptState>()(store);
