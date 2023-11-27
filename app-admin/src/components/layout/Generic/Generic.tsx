import { ReactNode } from "react";
import styles from "./Generic.module.scss";

interface IGeneric {
  children: ReactNode;
  gap: string;
}

const Row = ({ children, gap }: IGeneric) => {
  return (
    <div className={styles.Row} style={{ gap }}>
      {children}
    </div>
  );
};

const Column = ({ children, gap }: IGeneric) => {
  return (
    <div className={styles.Column} style={{ gap }}>
      {children}
    </div>
  );
};

export { Row, Column };
