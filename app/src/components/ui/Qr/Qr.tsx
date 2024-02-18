import React from "react";
import styles from "./Qr.module.scss";
import Image from "next/image";

const Qr = () => {
  return (
    <div className={styles.contenQrMain}>
      <span className={styles.msgQr}>Escanea el codigo QR </span>
      <div className={styles.qr}>
        <span className={styles.bottomLeft}></span>
        <span className={styles.bottomRight}></span>
        <span className={styles.topLeft}></span>
        <span className={styles.topRight}></span>
        <img
          src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg"
          alt="social"
        />
      </div>
    </div>
  );
};

export default Qr;
