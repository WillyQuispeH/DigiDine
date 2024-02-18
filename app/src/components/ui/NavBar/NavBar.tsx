"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useScroll } from "@/store/hooks";
import useNavigation from "@/hooksReact/useNavigation";

const NavBar = () => {
  const { setScroll } = useScroll();
  const [checked, setChecket] = useState(false);
  const { param } = useNavigation();
  
  return (
    <div className={styles.menu}>
      <input
        type="checkbox"
        id="menuToggle"
        checked={checked}
        onClick={() => {
          setChecket(!checked);
        }}
        className={styles.to}
      />
      <label htmlFor="menuToggle" className={styles.contentMenuICon}>
        <span className="material-symbols-outlined">zoom_out_map</span>
      </label>

      <Link
        href={`/?n=${param.n}`}
        onClick={() => {
          setScroll(true);
          setChecket(!checked);
        }}
        className={styles.itemMenuOne}
      >
        <span className="material-symbols-outlined">widgets</span>
        <p>Menu</p>
      </Link>
      <Link
        href={`/category?n=${param.n}`}
        onClick={() => {
          setScroll(true);
          setChecket(!checked);
        }}
        className={styles.itemMenuDos}
      >
        <span className="material-symbols-outlined">menu_book</span>
        <p>Categoria</p>
      </Link>
      <Link
        href={`/shared?n=${param.n}`}
        onClick={() => {
          setScroll(true);
          setChecket(!checked);
        }}
        className={styles.itemMenuTres}
      >
        <span className="material-symbols-outlined">qr_code_scanner</span>
        <p>Compartir</p>
      </Link>
      <Link
        href={`/product?n=${param.n}`}
        onClick={() => {
          setScroll(true);
          setChecket(!checked);
        }}
        className={styles.itemMenuCuatro}
      >
        <span className="material-symbols-outlined">restaurant_menu</span>{" "}
        <p>Productos</p>
      </Link>
    </div>
  );
};

export default NavBar;
