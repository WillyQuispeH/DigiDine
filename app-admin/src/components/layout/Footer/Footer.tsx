"use client";
import React, { ReactNode } from "react";
import styles from "./Footer.module.scss";

import Button from "@/components/ui/Button";
import useAuth from "@/store/hooks/useAuth";
import { useComercio } from "@/store/hooks";
import ScreenLoader from "../ScreenLoader";

interface IFooter {
  children?: ReactNode;
}
const Footer = ({ children }: IFooter) => {
  const { comercio, updateCategoryProduct, loadingComercio } = useComercio();

  const handleOnSave = () => {
    updateCategoryProduct(comercio);
  };

  return (
    <div className={styles.footer}>
      <Button
        onClick={handleOnSave}
        valor="RegistrarNuevoPRO"
        width="180px"
        height="50px"
        disabled={false}
        loader={loadingComercio}
      />
      {children}
      <ScreenLoader active={loadingComercio} />
    </div>
  );
};

export default Footer;
