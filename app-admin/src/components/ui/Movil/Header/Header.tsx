import React from "react";
import styles from "./Header.module.scss";

interface IHeader {
  img: string;
  title: string;
}

const Header = ({ img, title }: IHeader) => {
  return (
    <div className={styles.headerMovil}>
      <img src={img} alt={img} />
      <h1>{title}</h1>
      <div className={styles.buttonWatsapp}>+ 56 957902342</div>
    </div>
  );
};

export default Header;
