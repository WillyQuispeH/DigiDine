import React from "react";
import styles from "./BtnIconText.module.scss";

interface IBtnIconText {
  text?: string;
  icon?: string;
  width: string;
  onClick?: () => void;
}

const BtnIconText = ({ text, onClick, icon, width }: IBtnIconText) => {
  return (
    <button className={styles.btnIconText} onClick={onClick} style={{ width }}>
      <span className="material-symbols-outlined">{icon}</span>
      {text && text}
    </button>
  );
};

export default BtnIconText;
