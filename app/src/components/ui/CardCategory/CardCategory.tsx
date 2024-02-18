import React from "react";
import styles from "./CardCategory.module.scss";
import { ICategory } from "@/interfaces/category";
import Product2 from "../Product2/Product2";
import Product1 from "../Product1";
import Image from "next/image";

interface ICardCategory {
  category: ICategory;
}

const CardCategory: React.FC<ICardCategory> = ({ category }) => {
  const topFiht = category?.products
    .sort((a, b) => b.favorite - a.favorite)
    .slice(0, 5);

  return (
    <div className={styles.cardCategory}>
      <img className={styles.imgCategory} src={category?.img} alt="" />
      <div className={styles.contentMainCategory}>
        <h1 className={styles.contentTitle}>{category.name}</h1>
        <p className={styles.contenDescription}>{category.description}</p>
        <div className={styles.contenTopProduct}>
          <h1>Los mas Favoritos</h1>
          <div className={styles.contentItems}>
            {topFiht?.map((product, key) => (
              <Product2 key={key} product={product} />
            ))}
          </div>
        </div>
        <div className={styles.contenAllProduct}>
          <h1>Todos los productos</h1>
          <div className={styles.cotentItem}>
            {category.products.map((product, key) => (
              <Product1 product={product} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
