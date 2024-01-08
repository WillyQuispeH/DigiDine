import React from "react";
import { gptStore } from "../zustand";

const useGPT = () => {
  const { loading: loadingFile } = gptStore((state) => ({
    loading: state.loading,
  }));

  const { completions } = gptStore();

  return {
    loadingFile,
    completions,
  };
};

export default useGPT;
