import { productStore } from "../zustand";

const useProduct = () => {
  const {
    product,
    list: listProduct,
    loading: loadingProduct,
    isValid: isValidProduct,
  } = productStore((state) => ({
    product: state.product,
    list: state.list,
    loading: state.loading,
    isValid: state.isValid,
  }));

  const {
    setProduct,
    setAllProduct,
    getAllByRestaurantId,
    setIsValid: setIsValidProduct,
    create: createProduct,
  } = productStore();

  return {
    setProduct,
    setAllProduct,
    product,
    loadingProduct,
    listProduct,
    getAllByRestaurantId,
    setIsValidProduct,
    createProduct,
    isValidProduct,
  };
};

export default useProduct;
