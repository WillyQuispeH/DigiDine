export interface IProduct {
  id: string;
  name: string;
  img: string;
  price: number;
  favorite: number;
  description: string;
  ingredients: IIngredient[];
}

export interface IIngredient {
  id: string;
  name: string;
}

const initData = {
  id: "",
  name: "",
  img: "",
  price: 0,
  favorite: 0,
  description: "",
  ingredients: [],
};

export { initData };

export interface IProductUi {
  id: string;
  name: string;
}
