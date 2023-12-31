import React from "react";

import styles from "./Title.module.scss";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Title;
