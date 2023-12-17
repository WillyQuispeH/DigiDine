import React, { ReactNode } from "react";

import styles from "./Modal.module.scss";
import Button from "../Button";
import { useUi } from "@/store/hooks";

interface IModal {
  children: ReactNode;
  title: string;
  textAcept: string;
  textCancel: string;
  validAcept: boolean;
  modal: boolean;
  setModal: (modal: boolean) => void;
  onClicAcept: () => void;
}

const Modal = ({
  children,
  title,
  textAcept,
  textCancel,
  onClicAcept,
  validAcept,
  setModal,
  modal,
}: IModal) => {
  const accept = () => {
    onClicAcept();
    setModal(false);
  };

  const cancel = () => {
    setModal(false);
  };

  return (
    <div
      className={styles.overlay}
      style={{ display: modal ? "flex" : "none" }}
    >
      <div className={styles.modal}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <Button
            valor={textCancel}
            width="100px"
            height="40px"
            onClick={cancel}
            loader={false}
          />{" "}
          <Button
            valor={textAcept}
            width="100px"
            height="40px"
            onClick={accept}
            loader={false}
            disabled={!validAcept}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
