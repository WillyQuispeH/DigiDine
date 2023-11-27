import { useState } from "react";
import Loader from "../Loader";
import styles from "./Button.module.scss";

interface IntButton {
  onClick?: any;
  disabled?: boolean;
  valor: string;
  width: string;
  height: string;
  loader: boolean;
}
const Button = ({
  onClick,

  valor,
  width,
  height,
  disabled,
  loader,
}: IntButton) => {
  return (
    <div className={styles.button} style={{ width, height }}>
      {loader ? (
        <Loader width={height} />
      ) : (
        <button onClick={onClick} disabled={disabled}>
          {valor}
        </button>
      )}
    </div>
  );
};
export default Button;
