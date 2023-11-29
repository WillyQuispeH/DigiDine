import React from "react";
import styles from "./CardProduct.module.scss";

interface ICardProduct {
  name: string;
  img: string;
  price: number;
  ingredients: ICardIngredients[];
}
interface ICardIngredients {
  name: string;
}

const CardProduct = ({ name, img, price, ingredients }: ICardProduct) => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.productimg}>
        <div className={styles.contenImg}>
          <img src={img} alt="ImgPrd" />
          <div className={styles.price}>{`$ ${price}`}</div>
        </div>
        <div className={styles.contenName}>{name}</div>
      </div>
    </div>
  );
};

export default CardProduct;
