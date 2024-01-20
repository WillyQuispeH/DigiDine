import React from "react";
import { Link } from "react-scroll";
import styles from "./Comercio.module.scss";
import { useComercio } from "@/store/hooks";
import Image from "next/image";

const Comercio = () => {
  const { comercio } = useComercio();
  const { restaurant } = comercio;
  return (
    <Link
      to="services"
      spy={true}
      smooth={true}
      duration={500}
      className={styles.comercio}
    >
      <div className={styles.contenLogoName}>
        <Image
          className={styles.logoComercio}
          src={restaurant.logo}
          alt="ComercioLogo"
        />
        <h1 className={styles.contentNameComercio}>{restaurant.name}</h1>
      </div>
    </Link>
  );
};

export default Comercio;
