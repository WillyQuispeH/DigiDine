"use client";
import React, { useState } from "react";

import styles from "./Movil.module.scss";
import Category from "./Category";
import Product from "./Product";
import Shared from "./Shared";
import { useUi } from "@/store/hooks";
import ProItem from "./ProItem";

const Movil = () => {
  const { setStageUi, stageUi } = useUi();

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
        {stageUi === "product" && <Product />}
        {stageUi === "category" && <Category />}
        {stageUi === "shared" && <Shared />}
        {stageUi === "proItem" && <ProItem />}
      </div>

      <div className={styles.contentNavMobil}>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStageUi("product");
          }}
        >
          <span className="material-symbols-outlined">restaurant_menu</span>
          <p>Productos</p>
        </div>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStageUi("category");
          }}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <p>Categorias</p>
        </div>
        <div
          className={styles.itemMovilNav}
          onClick={() => {
            setStageUi("shared");
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
