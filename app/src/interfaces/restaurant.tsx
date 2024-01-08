export interface IRestaurant {
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
}

const initDataRestaurant = {
  id: "",
  name: "",
  district: "",
  address: "",
  open: "",
  close: "",
  phone: "",
  web: "",
  email: "",
  wifi: "",
  logo: "",
};

export { initDataRestaurant };
