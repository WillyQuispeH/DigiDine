import { comercioStore } from "../zustand";

const useComercio = () => {
  const {
    comercio,
    loading: loadingComercio,
    list: listComercio,
  } = comercioStore((state) => ({
    comercio: state.comercio,
    loading: state.loading,
    list: state.list,
  }));

  const {
    create: createComercio,
    getByPersonId,
    setComercio,
  } = comercioStore();

  return {
    setComercio,
    createComercio,
    getByPersonId,
    comercio,
    loadingComercio,
    listComercio,
  };
};

export default useComercio;
