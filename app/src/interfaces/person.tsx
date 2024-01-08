export interface IPerson {
  id: string;
  name: string;
  paternalLastName: string;
  maternalLastName: string;
  email: string;
  phone: string;
  password: string;
}

const initData = {
  id: "",
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  email: "",
  phone: "",
  password: "",
};

export { initData };
