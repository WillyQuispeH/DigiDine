import React from "react";
import styles from "./CardSocial.module.scss";
import Image from "next/image";

interface ICardSocial {
  img: string;
  name: string;
}

const CardSocial = ({ img, name }: ICardSocial) => {
  return (
    <div className={styles.cardSocial}>
      <Image src={img} alt="socail" />
      <p>{name}</p>
    </div>
  );
};

export default CardSocial;
