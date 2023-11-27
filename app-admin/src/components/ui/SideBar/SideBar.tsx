"use client";
import React from "react";
import styles from "./SideBar.module.scss";
import { useUi } from "@/store/hooks";
import { usePathname, useParams } from "next/navigation";

import Link from "next/link";

const SideBar = () => {
  const { sideBar, setSideBar } = useUi();

  const params = useParams();

  const data = [
    { icon: "delete", path: "/delete", text: "Eliminar" },
    { icon: "add", path: "/add", text: "Agregar" },
    {
      icon: "add_business",
      path: `${params.comercio}/product`,
      text: "Nuevo producto",
    },
    {
      icon: "library_books",
      path: `${params.comercio}/category`,
      text: "Nueva Categoria",
    },
  ];

  return (
    <div className={styles.sideBar} style={{ left: sideBar ? "-320px" : "0" }}>
      <ul className={styles.ulSideBar}>
        {data.map((item, key) => (
          <li key={key}>
            <Link
              className={styles.linkSideBar}
              href={item.path}
              onClick={() => {
                setSideBar();
              }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
