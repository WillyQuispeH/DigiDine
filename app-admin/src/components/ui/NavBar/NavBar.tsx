"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import LogoName from "../LogoName";
import { useUi } from "@/store/hooks";
import UserIcon from "../UserIcon";

const NavBar = () => {
  const { setSideBar, sideBar } = useUi();

  return (
    <div className={styles.navBar}>
      <div className={styles.buttonLogoNavBar}>
        <LogoName />
        <span
          onClick={() => {
            setSideBar();
          }}
          className="material-symbols-outlined"
        >
          {!sideBar ? " arrow_back_ios_new" : "arrow_forward_ios"}
        </span>
      </div>
      <div>
        <UserIcon />
      </div>
    </div>
  );
};

export default NavBar;
