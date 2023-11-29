"use client";
import React, { useState } from "react";

import styles from "./Movil.module.scss";
import Category from "./Category";
import Product from "./Product";
import Shared from "./Shared";

const Movil = () => {
  const [stage, setStage] = useState<string>("product");
  const horaActual = new Date().toLocaleTimeString();
  return (
    <div className={styles.movil}>
      <div className={styles.nav}>
        <span className={styles.hora}>{horaActual}</span>
        <span className={styles.centenPopup}></span>
        <span className={styles.bateryWigi}>
          <span className="material-symbols-outlined">battery_horiz_075</span>
          <span className="material-symbols-outlined">wifi</span>
        </span>
      </div>
      <div className={styles.contenVisual}>
        {stage === "product" && <Product />}
        {stage === "category" && <Category />}
        {stage === "shared" && <Shared />}
      </div>
      <div className={styles.contentNavMobil}>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStage("product");
          }}
        >
          <span className="material-symbols-outlined">restaurant_menu</span>
          <p>Productos</p>
        </div>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStage("category");
          }}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <p>Categorias</p>
        </div>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStage("shared");
          }}
        >
          <span className="material-symbols-outlined">qr_code_scanner</span>
          <p>Compartir</p>
        </div>
      </div>
    </div>
  );
};

export default Movil;
