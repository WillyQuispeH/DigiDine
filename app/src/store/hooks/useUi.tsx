import { uiStore } from "../zustand";

const useUi = () => {
  const { listFavoriteProduct } = uiStore((state) => ({
    listFavoriteProduct: state.listFavoriteProduct,
  }));

  const { addFavoriteProduct } = uiStore();

  return { listFavoriteProduct, addFavoriteProduct };
};

export default useUi;
