import React, { useState, useEffect, useCallback } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckBox {
  onChange: any;
  checked: boolean;
  valor: string;
  width: string;
  name: string;
}

const CheckBox = ({ onChange, checked, valor, width, name }: ICheckBox) => {
  return (
    <div className={styles.checkBoxs} style={{ width }}>
      <input id={name} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={name}>{valor}</label>
    </div>
  );
};

export default CheckBox;
