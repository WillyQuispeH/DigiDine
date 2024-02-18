export interface IProduct {
  id: string;
  name: string;
  img: string;
  price: number;
  favorite: number;
  description: string;
  ingredients: IIngredient[];
  reviews: IReviews[];
}

export interface IIngredient {
  id: string;
  name: string;
}

export interface IReviews {
  id: string;
  date: string;
  user: string;
  avatar: string;
  review: string;
  person_id: string;
  product_id: string;
}

const initData = {
  id: "",
  name: "",
  img: "",
  price: 0,
  favorite: 0,
  description: "",
  ingredients: [],
  reviews: [],
};

export { initData };

export interface IProductUi {
  id: string;
  name: string;
}
