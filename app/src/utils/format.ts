const formatPrice = (num: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(num);
};

const unFormatRut = (rut: string) => {
  return rut?.split(".").join("").split("-").join("");
};

const formatRut = (rut: string) => {
  return unFormatRut(rut)
    ?.replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4")
    .toUpperCase();
};
export { formatPrice, formatRut, unFormatRut };
