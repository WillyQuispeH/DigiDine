"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.menu}>
      <input type="checkbox" id="menuToggle" className={styles.to} />
      <label htmlFor="menuToggle" className={styles.contentMenuICon}>
        <span className="material-symbols-outlined">zoom_out_map</span>
      </label>

      <Link href="/" className={styles.itemMenuOne}>
        <span className="material-symbols-outlined">widgets</span>
      </Link>
      <Link href="/category" className={styles.itemMenuDos}>
        <span className="material-symbols-outlined">menu_book</span>
      </Link>
      <Link href="/shared" className={styles.itemMenuTres}>
        <span className="material-symbols-outlined">qr_code_scanner</span>
      </Link>
      <Link href="/product" className={styles.itemMenuCuatro}>
        <span className="material-symbols-outlined">restaurant_menu</span>
      </Link>
    </div>
  );
};

export default NavBar;
