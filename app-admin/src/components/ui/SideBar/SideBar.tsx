"use client";
import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { useParams, useRouter } from "next/navigation";

import UserIcon from "../UserIcon";

const SideBar = () => {
  const router = useRouter();

  const params = useParams();

  const data = [
    { icon: "storefront", path: "/dashboard/", text: "Restaurants" },

    {
      icon: "add_business",
      path: `/dashboard/${params.comercio}/product`,
      text: "Producto",
    },
    {
      icon: "library_books",
      path: `/dashboard/${params.comercio}/category/`,
      text: "Nueva Categoria",
    },
    {
      icon: "aod",
      path: `/dashboard/${params.comercio}/figma/`,
      text: "Diseñar",
    },
  ];

  const [rotated, setRotated] = useState(false);

  const handleLogoClick = () => {
    setRotated(!rotated);
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.contenLogoGaman}>
        <img
          onClick={handleLogoClick}
          className={`${styles.imgLogo} ${rotated ? styles.rotated : ""}`}
          src="/logo.png"
          alt=""
        />
      </div>

      <ul className={styles.ulSideBar}>
        {data?.map((item, key) => (
          <li key={key}>
            <div
              className={styles.linkSideBar}
              // href={item.path}
              onClick={() => {
                router.push(item.path);
              }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className={styles.textSidebar}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <UserIcon />
    </div>
  );
};

export default SideBar;
