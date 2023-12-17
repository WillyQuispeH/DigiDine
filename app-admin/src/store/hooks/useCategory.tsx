import React from "react";
import { categoryStore } from "../zustand";

const useCategory = () => {
  const { comercio: comercioCategory, category } = categoryStore((state) => ({
    comercio: state.comercio,
    category: state.category,
  }));

  const {
    getByComercioId,
    updateImg,
    create: createCategory,
    delete: deleteCategory,
  } = categoryStore();

  return {
    getByComercioId,
    comercioCategory,
    updateImg,
    createCategory,
    deleteCategory,
    category,
  };
};

export default useCategory;
