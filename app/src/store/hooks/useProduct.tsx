import { productStore } from "../zustand";

const useProduct = () => {
  const {
    product,
    list: listProduct,
    loading: loadingProduct,
  } = productStore((state) => ({
    product: state.product,
    list: state.list,
    loading: state.loading,
  }));

  const { addFavorite, reset: resetProduct } = productStore();

  return {
    product,
    loadingProduct,
    listProduct,
    addFavorite,
    resetProduct,
  };
};

export default useProduct;
