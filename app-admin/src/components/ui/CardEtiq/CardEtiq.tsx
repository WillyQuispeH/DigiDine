import React from "react";
import styles from "./CardEtiq.module.scss";

interface ICardEtiq {
  width: string;
  text: string;
  icon: string;
}
const CardEtiq = ({ width, text, icon }: ICardEtiq) => {
  return (
    <div className={styles.cardEtiq} style={{ width }}>
      <span className="material-symbols-outlined">{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default CardEtiq;
