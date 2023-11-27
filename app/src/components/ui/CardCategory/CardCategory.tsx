import React from "react";
import styles from "./CardCategory.module.scss";

interface ICardCategory {
  alignItems: "flex-start" | "flex-end" | "center";
  category: string;
  img: string;
  count: number;
}

const CardCategory = ({ alignItems, category, img, count }: ICardCategory) => {
  return (
    <div className={styles.cardCategory}>
      <div className={styles.categoryInfo} style={{ alignItems }}>
        <h1>{category}</h1>
        <span>{`${count} productos`}</span>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default CardCategory;
