export interface IProduct {
  product: {
    id: string;
    name: string;
    img: string;
    price: number;
  };
  ingredients: IIngredient[];
  category: ICategory[];
}

interface IIngredient {
  name: string;
}

interface ICategory {
  id: string;
  name: string;
}

const initData = {
  product: {
    id: "",
    name: "",
    img: "",
    price: 0,
  },
  ingredients: [],
  category: [],
};

export { initData };

export interface IProductUi {
  id: string;
  name: string;
}
