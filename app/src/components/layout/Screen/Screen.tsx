"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Screen.module.scss";
import { useComercio, useScroll } from "@/store/hooks";
import useNavigation from "@/hooksReact/useNavigation";
import { useRouter } from "next/navigation";

interface IScreen {
  children: ReactNode;
}
const Screen = ({ children }: IScreen) => {
  const { scroll } = useScroll();
  const { param } = useNavigation();
  const { comercio } = useComercio();
  const router = useRouter();

  // useEffect(() => {
  //   if (!param.n || !comercio.comercio.id) {
  //     router.push("/comercios");
  //   }
  // }, [comercio]);

  return (
    <div
      className={styles.screen}
      style={{ overflow: scroll ? "hidden" : "auto" }}
    >
      {children}
    </div>
  );
};

export default Screen;
