import React from "react";
import { fileStore } from "../zustand";

const useFile = () => {
  const { loading: loadingFile, file } = fileStore((state) => ({
    loading: state.loading,
    file: state.file,
  }));

  const { add: addFile } = fileStore();

  return {
    file,
    loadingFile,
    addFile,
  };
};

export default useFile;
