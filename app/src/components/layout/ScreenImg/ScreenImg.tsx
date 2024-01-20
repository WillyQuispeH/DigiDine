"use client";
import React, { ReactNode, useState } from "react";

import styles from "./ScreenImg.module.scss";

interface IScreenImg {
  img: string;
  children: ReactNode;
}

const ScreenImg: React.FC<IScreenImg> = ({ img, children }) => {
  const [active, setActive] = useState(true);

  return (
    <div
      className={styles.scrennImg}
      style={{ height: active ? "100vh" : "0vh" }}
    >
      <img className={styles.imgMain} src={img} alt="" />

      <div className={styles.contentScreen}>
        {children}

        <p className={styles.msgInicio}>DigiDine by Gaman</p>
        <span
          className={`material-symbols-outlined ${styles.spanArrow}`}
          onClick={() => setActive(!active)}
        >
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
};

export default ScreenImg;
// ("https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg");
