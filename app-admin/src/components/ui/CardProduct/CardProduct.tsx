import React from "react";
import styles from "./CardProduct.module.scss";

interface ICardProduct {
  name: string;
  img: string;
  price: number;
  favorite?: number;
}

const CardProduct = ({ name, img, price, favorite }: ICardProduct) => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.contenImg}>
        <img src={img} alt="ImgPrd" />
        <div className={styles.favorite}>
          <span className="material-symbols-outlined">award_star</span>4.5
        </div>
      </div>
      <div className={styles.contenName}>{name}</div>
      <div className={styles.price}>
        <p>{`$ ${price}`}</p>
        <span className="material-symbols-outlined">favorite</span>
      </div>
    </div>
  );
};

export default CardProduct;
