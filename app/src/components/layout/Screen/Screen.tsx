import React, { ReactNode } from "react";
import styles from "./Screen.module.scss";

interface IScreen {
  children: ReactNode;
}
const Screen = ({ children }: IScreen) => {
  return <div className={styles.screen}>{children}</div>;
};

export default Screen;
