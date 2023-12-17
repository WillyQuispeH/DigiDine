import React from "react";

import styles from "./CardIngredients.module.scss";
import { Row } from "@/components/layout/Generic";

interface ICardIngredients {
  name: string;
  onClick: () => void;
  width: string;
}

const CardIngredients = ({ name, onClick, width }: ICardIngredients) => {
  return (
    <div className={styles.cardIngredients} style={{ width }}>
      <Row gap="5px">
        <h1>{name}</h1>
      </Row>
      <span className="material-symbols-outlined" onClick={onClick}>
        delete
      </span>
    </div>
  );
};

export default CardIngredients;
