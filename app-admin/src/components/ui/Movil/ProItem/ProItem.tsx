import React from "react";

import useProduct from "@/store/hooks/useProduct";
import HeaderProduct from "../HeaderProduct";

import styles from "./ProItem.module.scss";

const ProItem = () => {
  const { product } = useProduct();
  return (
    <div className={styles.proItem}>
      <HeaderProduct
        img={product.img}
        title={product.name}
        favorite={product.favorite}
      />
      <div>{product.name}</div>
    </div>
  );
};

export default ProItem;
