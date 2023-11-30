import React from "react";
import { categoryStore } from "../zustand";

const useCategory = () => {
  const { categoryList } = categoryStore((state) => ({
    categoryList: state.categoryList,
  }));

  const { getByComercioId, updateImg } = categoryStore();

  return {
    getByComercioId,
    categoryList,
    updateImg,
  };
};

export default useCategory;
