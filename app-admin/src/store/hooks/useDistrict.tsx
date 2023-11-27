import { districtStore } from "../zustand";

const useDistrict:any = () => {
  const { districtList } = districtStore((state) => ({
    districtList: state.list,
  }));

  const { getAll: getAllDistrict } = districtStore();

  return {
    getAllDistrict,
    districtList,
  };
};

export default useDistrict;
