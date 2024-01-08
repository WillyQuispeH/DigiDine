import React, { ReactNode } from "react";

import styles from "./Content.module.scss";

interface IContent {
  children: ReactNode;
}

const Content = ({ children }: IContent) => {
  return (
    <div id="contentMainPrinciap" className={styles.contentMain}>
      {children}
    </div>
  );
};

export default Content;
