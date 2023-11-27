const typeFile = (url: string) => {
  const ext: string = url?.split(".").pop()?.toLowerCase() || "";
  const tiposArchivo: { [key: string]: string } = {
    pdf: "PDF",
    jpg: "JPEG",
    jpeg: "JPEG",
    png: "PNG",
  };

  if (tiposArchivo[ext]) {
    return tiposArchivo[ext];
  } else {
    return "Tipo de archivo desconocido";
  }
};
export default typeFile;
