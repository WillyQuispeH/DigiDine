import React from "react";

import styles from "./Card.module.scss";
import { useComercio } from "@/store/hooks";

interface ICard {}

const CardCatCircle: React.FC<ICard> = () => {
  const { comercio } = useComercio();

  const { category } = comercio;
  return (
    <div className={styles.contenCircles}>
      {category.map((card, key) => (
        <div key={key} className={styles.cardCatCircle}>
          <img src={card.img} alt="" />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardCatCircle;
