import React from "react";
import { fileStore } from "../zustand";

const useFile = () => {
  const { loading: loadingFile, file } = fileStore((state) => ({
    loading: state.loading,
    file: state.file,
  }));

  const { add: addFile, reset: resetFile } = fileStore();

  return {
    file,
    loadingFile,
    addFile,
    resetFile,
  };
};

export default useFile;
