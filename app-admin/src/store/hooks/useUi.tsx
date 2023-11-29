import { uiStore } from "../zustand";

const useUi = () => {
  const {
    sideBar,
    categoryList,
    productoList: productListUi,
  } = uiStore((state) => ({
    sideBar: state.sideBar,
    categoryList: state.categoryList,
    productoList: state.productList,
  }));

  const { setSideBar, setCategory, setProduct: setProductUi } = uiStore();

  return {
    setSideBar,
    setCategory,
    categoryList,
    productListUi,
    sideBar,
    setProductUi,
  };
};

export default useUi;
