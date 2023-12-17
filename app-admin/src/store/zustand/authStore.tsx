import { IUser } from "@/interfaces/user";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import apiInstance from "@/util/api";

type authState = {
  user: IUser;
  status: string;
  validate: (email: string, password: string) => void;
  loading: boolean;
  error: String;
};

const storeAuth: StateCreator<authState> = (set) => ({
  user: { id: "", person_id: "" },
  status: "pending",
  loading: false,
  error: "",

  validate: async (email: string, password: string) => {
    try {
      set((state) => ({ ...state, loading: true }));

      const { data: response } = await apiInstance.post("/user/validate", {
        email,
        password,
      });

      set((state) => ({ ...state, loading: false, user: response.data }));
    } catch (error) {
      set((state) => ({
        ...state,
        loading: false,
        error: (error as Error).message,
      }));
    }
  },
});

export const authStore = create<authState>()(
  persist(storeAuth, { name: "login_user" })
);
