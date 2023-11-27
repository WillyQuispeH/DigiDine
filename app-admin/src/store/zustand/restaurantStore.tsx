import { IRestaurant, initDataRestaurant } from "@/interfaces/restaurant";
import { create } from "zustand";

type restaurantState = {
  restaurant: IRestaurant;
  isValid: boolean;
  setRestaurant: (restaurant: IRestaurant) => void;
};

export const restaurantStore = create<restaurantState>((set, get) => ({
  restaurant: initDataRestaurant,
  isValid: false,
  setRestaurant: async (restaurant: IRestaurant) => {
    set((state) => ({
      restaurant,
      isValid:
        restaurant.address !== "" &&
        restaurant.name !== "" &&
        restaurant.district !== "" &&
        restaurant.close !== "" &&
        restaurant.open !== "" &&
        restaurant.phone !== "" &&
        restaurant.web !== "",
    }));
  },
}));
