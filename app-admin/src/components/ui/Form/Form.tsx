import React, { ReactNode } from "react";

import styles from "./Form.module.scss";

interface IForm {
  children: ReactNode;
  title: string;
  isValid: boolean;
}

const Form = ({ children, title, isValid }: IForm) => {
  return (
    <div className={styles.form}>
      <div
        className={styles.titleForm}
        // style={{ background: isValid ? "#60b2e4" : "#243343" }}
      >
        {title}
      </div>
      <div className={styles.contentForm}>{children}</div>
    </div>
  );
};

export default Form;
