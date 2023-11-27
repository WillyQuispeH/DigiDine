"use client"
import React from "react";

import styles from "./ButtonIcon.module.scss";

interface IButtonIcon {
  icon: string;
  width: string;
  height: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonIcon = ({
  icon,
  width,
  height,
  onClick,
  disabled,
}: IButtonIcon) => {
  return (
    <button
      className={styles.buttonIcon}
      style={{ width, height }}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};

export default ButtonIcon;
