import { uiStore } from "../zustand";

const useUi = () => {
  const {
    sideBar,
    productoList: productListUi,
    modal,
    stage: stageUi,
  } = uiStore((state) => ({
    sideBar: state.sideBar,
    modal: state.modal,
    productoList: state.productList,
    stage: state.stage,
  }));

  const {
    setSideBar,
    setProduct: setProductUi,
    setModal,
    setStage: setStageUi,
  } = uiStore();

  return {
    setSideBar,
    productListUi,
    sideBar,
    setProductUi,
    setStageUi,
    modal,
    stageUi,
    setModal,
  };
};

export default useUi;
