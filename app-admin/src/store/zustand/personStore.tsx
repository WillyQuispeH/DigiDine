import { IPerson, initData } from "@/interfaces/person";
import { create } from "zustand";

type personState = {
  person: IPerson;
  setPerson: (person: IPerson) => void;
  isValid: boolean;
};

export const personStore = create<personState>((set, get) => ({
  person: initData,
  isValid: false,
  setPerson: async (person: IPerson) => {
    set((state) => ({
      person,
      isValid:
        person.email !== "" &&
        person.name !== "" &&
        person.phone !== "" &&
        person.paternalLastName !== "" &&
        person.maternalLastName !== "" &&
        person.password !== "",
    }));
  },
}));
