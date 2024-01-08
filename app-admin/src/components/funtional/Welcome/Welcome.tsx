"use client";
import TableComercio from "@/components/ui/TableComercio";
import React from "react";

import styles from "./Welcome.module.scss";
import Button from "@/components/ui/Button";
import { useComercio, useGPT } from "@/store/hooks";
import LoaderLogo from "@/components/ui/LoaderLogo";
import ScreenLoader from "@/components/layout/ScreenLoader";

const Welcome = () => {
  const { completions } = useGPT();
  const { loadingComercio } = useComercio();
  return (
    <div className={styles.contenWelcome}>
      <div className={styles.contenTitle}>Mis Restaurants</div>
      <TableComercio />
      <Button
        valor="openia"
        onClick={() => completions()}
        width="120px"
        height="40px"
        loader={false}
      />
      <ScreenLoader active={loadingComercio} />
    </div>
  );
};

export default Welcome;
// GamanStartup957902342
