import React from "react";

import styles from "./ProductOrder.module.scss";
import Product from "./Product";
import Ingredients from "./Ingredients";
import Photo from "./Photo";

const ProductOrder = () => {
  return (
    <div className={styles.newProduct}>
      <Product />

      <Ingredients />

      <Photo />
    </div>
  );
};

export default ProductOrder;
