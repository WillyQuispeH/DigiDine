import React from "react";

import styles from "./CardPrime.module.scss";
import { formatPrice } from "@/utils/format";
import { useComercio } from "@/store/hooks";

interface ICard {}

const CardPrime: React.FC<ICard> = () => {
  const { comercio } = useComercio();
  const { category } = comercio;

  const favorite = category
    .flatMap((category) =>
      category.products
        .filter((product) => product.favorite > 0)
        .sort((a, b) => b.favorite - a.favorite)
        .slice(0, 9)
    )
    .map((product) => {
      if (product.favorite < 56) {
        product.favorite = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      }
      return product;
    });

  return (
    <div className={styles.contenPrime}>
      {favorite.map((prod, key) => (
        <div className={styles.cardPrime} key={key}>
          <div className={styles.num}>
            <span>{key + 1}</span>
          </div>
          <img className={styles.cardImg} src={prod.img} alt="" />
          <div className={styles.cardDes}>
            <h1 className={styles.name}>{prod.name}</h1>
            <p className={styles.description}>{prod.description}</p>
            <p className={styles.price}>{formatPrice(prod.price)}</p>
          </div>
          <div className={styles.contentAccion}>
            <span className={`material-symbols-outlined ${styles.buttonLike}`}>
              favorite
            </span>
            <p>{prod.favorite}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPrime;
