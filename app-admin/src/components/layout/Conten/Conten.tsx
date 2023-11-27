import React, { ReactNode } from "react";
import styles from "./Content.module.scss";

interface IContent {
  children: ReactNode;
}

const Conten = ({ children }: IContent) => {
  return <div className={styles.conten}>{children}</div>;
};

export default Conten;
