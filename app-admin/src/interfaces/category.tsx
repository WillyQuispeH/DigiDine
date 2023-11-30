import { IProductUi } from "./product";

export interface Icategory {
  id: string;
  name: string;
  img: string;
}

export interface ICategoryListUi {
  products: IProductUi[];
  id: string;
  name: string;
  img: string;
}
