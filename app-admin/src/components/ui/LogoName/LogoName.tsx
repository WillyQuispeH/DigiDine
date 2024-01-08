"use client";
import React from "react";
import styles from "./LogoName.module.scss";
import { useComercio } from "@/store/hooks";

const LogoName = () => {
  const { comercio } = useComercio();
  return (
    <div className={styles.logoName}>
      <div className={styles.logo}>
        <img src={comercio.restaurant.logo} alt="" />
      </div>
      {/* <h1>{comercio.restaurant.name}</h1> */}
    </div>
  );
};

export default LogoName;
