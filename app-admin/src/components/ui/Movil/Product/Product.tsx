import React from "react";

import styles from "./Product.module.scss";
import Header from "../Header";
import { useComercio } from "@/store/hooks";
import CardProduct from "../../CardProduct";
import { IProduct } from "@/interfaces/product";
import { ICategory } from "@/interfaces/category";

const Product = () => {
  const { comercio } = useComercio();
  const { category } = comercio;

  return (
    <div className={styles.product}>
      <Header img="/food.jpg" title="Productos" />

      <div className={styles.contenProductItemMovil}>
        {category?.map((category: ICategory, key) => (
          <div
            className={styles.contenProductCategory}
            key={key}
            style={{
              background: category.classe === "ofert" ? "green" : "blue",
            }}
          >
            <div className={styles.titleCategory}>{category.name}</div>
            <div className={styles.contenScroll}>
              <div className={styles.contenProductos}>
                {category?.products?.map((product: IProduct) => (
                  <CardProduct key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
