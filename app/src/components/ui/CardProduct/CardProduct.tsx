import React from "react";
import styles from "./CardProduct.module.scss";

interface ICardProduct {
  name: string;
  description: string;
  img: string;
  price: number;
  ingredients: ICardIngredients[];
}
interface ICardIngredients {
  name: string;
  calories: string;
}

const CardProduct = ({
  name,
  description,
  img,
  price,
  ingredients,
}: ICardProduct) => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.productimg}>
        <div className={styles.contenImg}>
          <img src={img} alt="ImgPrd" />
          <div className={styles.price}>{`$ ${price}`}</div>
        </div>
        <div className={styles.contenName}>{name}</div>
      </div>
      <div className={styles.contenInfo}>
        <ul>
          {ingredients.map((item, key) => (
            <li key={key}>
              {item.name} <span>{`${item.calories} Kcal`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardProduct;
