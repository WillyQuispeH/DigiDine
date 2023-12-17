"use client";
import React from "react";
import styles from "./SideBar.module.scss";
import { useUi } from "@/store/hooks";
import { usePathname, useParams, useRouter } from "next/navigation";

import Link from "next/link";

const SideBar = () => {
  const { sideBar, setSideBar } = useUi();
  const router = useRouter();

  const params = useParams();

  const data = [
    { icon: "delete", path: "/delete", text: "Eliminar" },
    { icon: "add", path: "/add", text: "Agregar" },
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

  return (
    <div className={styles.sideBar} style={{ left: sideBar ? "-320px" : "0" }}>
      <ul className={styles.ulSideBar}>
        {data?.map((item, key) => (
          <li key={key}>
            <div
              className={styles.linkSideBar}
              // href={item.path}
              onClick={() => {
                setSideBar();
                router.push(item.path);
              }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
