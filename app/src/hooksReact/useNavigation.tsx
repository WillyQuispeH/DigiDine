import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface IParams {
  name: string;
  value: string;
}

const useNavigation = () => {
  const searchParams = useSearchParams();

  const addParams = useCallback(
    (querys: IParams[]) => {
      const params = new URLSearchParams(searchParams);
      querys.forEach((par) => {
        params.set(par.name, par.value);
      });

      return params.toString();
    },
    [searchParams]
  );

  const n = searchParams.get("n") || "";
  const param = {
    n,
  };

  return { addParams, param };
};

export default useNavigation;
