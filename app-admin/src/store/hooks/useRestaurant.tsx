import { restaurantStore } from "../zustand";

const useRestaurant = () => {
  const { restaurant, isvalid: isValidRestaurant } = restaurantStore(
    (state) => ({
      restaurant: state.restaurant,
      isvalid: state.isValid,
    })
  );

  const { setRestaurant } = restaurantStore();

  return {
    setRestaurant,
    restaurant,
    isValidRestaurant,
  };
};

export default useRestaurant;
