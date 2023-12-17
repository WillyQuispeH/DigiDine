import { IProduct } from "./product";

export interface ICategory {
  id: string;
  name: string;
  img: string;
  classe: string;
  description: string;
  products: IProduct[];
  order: number;
}

const initDataCatgory = {
  id: "",
  name: "",
  img: "",
  classe: "",
  description: "",
  products: [],
  order: 0,
};

export { initDataCatgory };
