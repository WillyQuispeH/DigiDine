import { uiStore } from "../zustand";

const useUi = () => {
  const { sideBar } = uiStore((state) => ({
    sideBar: state.sideBar,
  }));

  const { setSideBar } = uiStore();

  return {
    setSideBar,
    sideBar,
  };
};

export default useUi;
