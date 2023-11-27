import { productStore } from "../zustand";

const useProduct = () => {
  const { product } = productStore((state) => ({
    product: state.product,
  }));

  const { setProduct } = productStore();

  return {
    setProduct,
    product,
  };
};

export default useProduct;
