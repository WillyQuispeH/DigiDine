import { uiStore } from "../zustand";

const useUi = () => {
  const {
    sideBar,
    categoryList: categoryListUi,
    productoList: productListUi,
  } = uiStore((state) => ({
    sideBar: state.sideBar,
    categoryList: state.categoryList,
    productoList: state.productList,
  }));

  const {
    setSideBar,
    setCategory: setCategoryUi,
    setProduct: setProductUi,
  } = uiStore();

  return {
    setSideBar,
    setCategoryUi,
    categoryListUi,
    productListUi,
    sideBar,
    setProductUi,
  };
};

export default useUi;
