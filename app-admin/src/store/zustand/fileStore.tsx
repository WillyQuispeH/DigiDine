import apiInstance from "@/util/api";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type fileState = {
  file: { url: string; public_id: string };
  add: (formData: FormData) => void;
  reset: () => void;
  loading: boolean;
};

const store: StateCreator<fileState> = (set) => ({
  file: { url: "", public_id: "" },
  loading: false,
  
  add: async (formData: FormData) => {
    set((state) => ({ ...state, loading: true }));

    const { data } = await apiInstance.post("/file/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    set((state) => ({ ...state, loading: false, file: data.data }));
  },

  reset: async () => {
    set((state) => ({
      ...state,
      loading: false,
      file: { url: "", public_id: "" },
    }));
  },
});

export const fileStore = create<fileState>()(store);
