import React from "react";

import styles from "./LoaderLogo.module.scss";

interface ILoaderLogo {
  width: string;
  text?: string;
}

const LoaderLogo = ({ width, text }: ILoaderLogo) => {
  return (
    <div className={styles.loaderLogo} style={{ width, height: width }}>
      <img className={styles.imgLogo} src="/logoWhite.png" alt="loader" />{" "}
      {text && <h1 className={styles.imgH1}>{text}</h1>}
    </div>
  );
};

export default LoaderLogo;
