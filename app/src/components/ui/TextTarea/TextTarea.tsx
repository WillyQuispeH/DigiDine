import styles from "./Input.module.scss";
import * as React from "react";

export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  label?: string;
  isValid: boolean;
}

const TextTarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, width, height, label, isValid, ...props }, ref) => {
    return (
      <div
        className={isValid ? styles.input : styles.inputAlert}
        style={{ width, height }}
      >
        <label>{label}</label>
        <textarea ref={ref} {...props} autoComplete="off" />
      </div>
    );
  }
);
TextTarea.displayName = "Input";

export default TextTarea;
