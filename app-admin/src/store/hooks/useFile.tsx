import React from "react";
import { fileStore } from "../zustand";

const useFile = () => {
  const {
    loading: loadingFile,
    file,
    fileBlob,
  } = fileStore((state) => ({
    loading: state.loading,
    file: state.file,
    fileBlob: state.fileBlod,
  }));

  const { add: addFile, reset: resetFile, setFileBlob } = fileStore();

  return {
    file,
    loadingFile,
    fileBlob,
    addFile,
    resetFile,
    setFileBlob,
  };
};

export default useFile;
