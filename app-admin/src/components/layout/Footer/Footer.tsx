"use client";
import React, { ReactNode } from "react";
import styles from "./Footer.module.scss";

import Button from "@/components/ui/Button";
import useAuth from "@/store/hooks/useAuth";

interface IFooter {
  children?: ReactNode;
}
const Footer = ({ children }: IFooter) => {
  const handleOnSave = () => {
    loginUser();
  };

  const { loginUser } = useAuth();
  return (
    <div className={styles.footer}>
      <Button
        onClick={handleOnSave}
        valor="Registrar"
        width="180px"
        height="50px"
        disabled={false}
        loader={false}
      />
      {children}
    </div>
  );
};

export default Footer;
