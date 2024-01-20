import React from "react";
import styles from "./Comercio.module.scss";
import { useComercio } from "@/store/hooks";
import Image from "next/image";

const Comercio = () => {
  const { comercio } = useComercio();
  const { restaurant } = comercio;
  return (
    <div className={styles.comercio}>
      <div className={styles.contenLogoName}>
        <Image
          className={styles.logoComercio}
          src={restaurant.logo}
          alt="ComercioLogo"
        />
        <h1 className={styles.contentNameComercio}>{restaurant.name}</h1>
      </div>
    </div>
  );
};

export default Comercio;
