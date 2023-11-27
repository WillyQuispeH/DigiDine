"use client";
import React, { useContext } from "react";
import styles from "./CardPromo.module.scss";

interface ICardPromo {
  info: string;
  title: string;
  price: number;
}

const CardPromo = ({ info, title, price }: ICardPromo) => {
  return (
    <div className={styles.cardPromo}>
      <div className={styles.promoTitle}>
        <p>{title}</p> <span>{`$ ${price}`}</span>
      </div>
      <div className={styles.promoInfo}>{info}</div>
    </div>
  );
};

export default CardPromo;
