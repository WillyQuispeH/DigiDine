import React, { ReactNode } from "react";

import styles from "./ScreenImg.module.scss";

interface IScreenImg {
  img: string;
  children: ReactNode;
}

const ScreenImg: React.FC<IScreenImg> = ({ img, children }) => {
  return (
    <div className={styles.scrennImg}>
      <img className={styles.imgMain} src={img} alt="" />

      <div className={styles.contentScreen}>
        {children}

        <p className={styles.msgInicio}>DigiDine by Gaman</p>
        <span className={`material-symbols-outlined ${styles.spanArrow}`}>
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
};

export default ScreenImg;
// ("https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg");
