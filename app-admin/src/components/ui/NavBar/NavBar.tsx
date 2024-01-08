"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import LogoName from "../LogoName";
import UserIcon from "../UserIcon";
import { useUi } from "@/store/hooks";

const NavBar = () => {
  const { stageUi } = useUi();
  return (
    <div className={styles.navBar}>
      <div className={styles.contenNavbar}>
        {stageUi === "product" && (
          <div className={styles.itemStage}>
            Productos
            <span className="material-symbols-outlined"> restaurant_menu</span>
          </div>
        )}
        {stageUi === "category" && (
          <div className={styles.itemStage}>
            Categoria
            <span className="material-symbols-outlined"> menu_book</span>
          </div>
        )}
        {stageUi === "shared" && (
          <div className={styles.itemStage}>
            Compartir
            <span className="material-symbols-outlined"> qr_code_scanner</span>
          </div>
        )}
        {stageUi === "proItem" && (
          <div className={styles.itemStage}>
            Producto Edit
            <span className="material-symbols-outlined"> restaurant_menu</span>
          </div>
        )}
      </div>
      <div>
        <LogoName />
      </div>
    </div>
  );
};

export default NavBar;
