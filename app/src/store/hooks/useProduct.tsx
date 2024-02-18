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

  const {
    addFavorite,
    reset: resetProduct,
    getById: getByIdProduct,
    createReview,
  } = productStore();

  return {
    product,
    loadingProduct,
    listProduct,
    addFavorite,
    resetProduct,
    getByIdProduct,
    createReview,
  };
};

export default useProduct;
