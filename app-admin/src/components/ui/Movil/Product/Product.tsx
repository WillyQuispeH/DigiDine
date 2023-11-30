import React from "react";

import styles from "./Product.module.scss";
import Header from "../Header";
import { useUi } from "@/store/hooks";
import CardProduct from "../../CardProduct";
import { IProduct } from "@/interfaces/product";

const Product = () => {
  const { productListUi } = useUi();

  return (
    <div className={styles.product}>
      <Header img="/food.jpg" title="Productos" />

      <div className={styles.contenProductItemMovil}>
        {productListUi.map((product: IProduct) => (
          <CardProduct
            key={product.product.id}
            name={product.product.name}
            img={product.product.img}
            price={product.product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
