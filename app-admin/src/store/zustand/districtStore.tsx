import { IDistrict } from "@/interfaces/district";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type districtState = {
  list: IDistrict[];
  getAll: () => void;
  loading: boolean;
};

const storeDistrict: StateCreator<districtState> = (set) => ({
  list: [],
  loading: false,
  getAll: async () => {
    set((state) => ({ loading: true }));

    const data = [
      { id: "primero", value: "condes", name: "condes" },
      { id: "primero", value: "condes", name: "condes" },
    ];

    set((state) => ({ loading: false, list: data }));
  },
});

export const districtStore = create<districtState>()(storeDistrict);
