"use client";
import TableComercio from "@/components/ui/TableComercio";
import React from "react";

import styles from "./Welcome.module.scss";
import { useComercio } from "@/store/hooks";
import ScreenLoader from "@/components/layout/ScreenLoader";

const Welcome = () => {
  const { loadingComercio } = useComercio();
  return (
    <div className={styles.contenWelcome}>
      <div className={styles.contenTitle}>Mis Restaurants</div>
      <TableComercio />

      <ScreenLoader active={loadingComercio} />
    </div>
  );
};

export default Welcome;
// GamanStartup957902342
