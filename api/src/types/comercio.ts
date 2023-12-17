type IComercio = {
  comercio: {
    id: string;
    date: string;
  };

  user: {
    id: string;
    person_id: string;
  };

  person: {
    id: string;
    name: string;
    paternalLastName: string;
    maternalLastName: string;
    email: string;
    phone: string;
  };

  restaurant: {
    id: string;
    name: string;
    district: string;
    address: string;
    open: string;
    close: string;
    phone: string;
    web: string;
    email: string;
    wifi: string;
    logo: string;
  };

  category: ICategory[];
};

type ICategory = {
  id: string;
  name: string;
  img: string;
  classe: string;
  description: string;
  products: IProduct[];
  order: number;
};

type IProduct = {
  id: string;
  name: string;
  img: string;
  price: number;
  favorite: number;
  description: string;
  ingredients: IIngredient[];
};

type IIngredient = {
  id: string;
  name: string;
};

export { IComercio, ICategory, IProduct };
