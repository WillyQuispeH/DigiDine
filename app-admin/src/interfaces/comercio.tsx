import { initData } from "./person";
import { IProduct } from "./product";
import { initDataRestaurant } from "./restaurant";

export interface IComercio {
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

  products: IProduct[];
}

const initDataComercio = {
  comercio: {
    id: "",
    date: "",
  },

  user: {
    id: "",
    person_id: "",
  },

  person: initData,

  restaurant: initDataRestaurant,

  products: [],
};

export { initDataComercio };
