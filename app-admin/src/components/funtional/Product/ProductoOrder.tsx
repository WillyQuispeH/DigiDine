import React from "react";

import { Column } from "@/components/layout/Generic";

import styles from "./ProductOrder.module.scss";
import Product from "./Product";
import Ingredients from "./Ingredients";
import Category from "./Category";
import Photo from "./Photo";

const ProductOrder = () => {
  return (
    <div className={styles.newProduct}>
      <Product />
      <Column gap="25px">
        <Ingredients />
        <Category />
      </Column>
      <Photo />
    </div>
  );
};

export default ProductOrder;
