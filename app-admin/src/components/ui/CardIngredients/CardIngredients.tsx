import React from "react";

import styles from "./CardIngredients.module.scss";
import { Row } from "@/components/layout/Generic";

interface ICardIngredients {
  name: string;
  calories: number;
  onClick: () => void;
  width: string;
}

const CardIngredients = ({
  name,
  calories,
  onClick,
  width,
}: ICardIngredients) => {
  return (
    <div className={styles.cardIngredients} style={{ width }}>
      <Row gap="5px">
        <h1>{name}</h1>
        <p className={styles.categoriaValue}>{`${calories} Kcal`}</p>
      </Row>
      <span className="material-symbols-outlined" onClick={onClick}>
        delete
      </span>
    </div>
  );
};

export default CardIngredients;
