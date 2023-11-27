import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href={"/"} className={styles.iconMenu}>
        <span className={`material-symbols-outlined  `}>menu</span>
      </Link>

      <Link href="/">
        <div className={styles.logo}>
          <img
            src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
            alt=""
          />
          <p>Gaman</p>
        </div>
      </Link>

      <ul>
        <Link href={"/product"}>
          <li>
            <span className="material-symbols-outlined">local_dining</span>
            Productos
          </li>
        </Link>
        <Link href={"/category"}>
          <li>
            <span className="material-symbols-outlined">menu_book</span>
            Categorias
          </li>
        </Link>
        <Link href={"/shared"}>
          <li>
            <span className={`material-symbols-outlined`}>share</span>
            Compartir
          </li>
        </Link>
      </ul>
      <Link href={"/shared"} className={styles.iconMenu}>
        <span className={`material-symbols-outlined  `}>share</span>
      </Link>
    </div>
  );
};

export default NavBar;
