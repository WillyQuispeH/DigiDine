import React from "react";
import styles from "./Comercio.module.scss";
import { useComercio } from "@/store/hooks";
import Image from "next/image";
import withScrollAnimation from "../framer";

const Comercio = () => {
  const { comercio } = useComercio();
  const { restaurant } = comercio;
  const AnimatedDiv = withScrollAnimation("div");

  return (
    <AnimatedDiv className={styles.comercio}>
      <div className={styles.contenLogoName}>
        <img
          className={styles.logoComercio}
          src={restaurant.logo}
          alt="ComercioLogo"
        />
        <h1 className={styles.contentNameComercio}>{restaurant.name}</h1>
      </div>
    </AnimatedDiv>
  );
};

export default Comercio;
