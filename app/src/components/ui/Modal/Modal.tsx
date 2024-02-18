import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface IntOverlay {
  children: ReactNode;
  active: boolean;
}

interface IModal {
  children: ReactNode;
}

interface IModalTitle {
  title: string;
  children: ReactNode;
}

interface IModalBody {
  children: ReactNode;
}

interface IModalFooter {
  children: ReactNode;
}

const Overlay = ({ children, active }: IntOverlay) => {
  return (
    <div
      className={styles.overlay}
      style={{ display: active ? "flex" : "none" }}
    >
      {children}
    </div>
  );
};

const Modal = ({ children }: IModal) => {
  return <div className={styles.modal}>{children}</div>;
};

const ModalTitle = ({ title, children }: IModalTitle) => {
  return (
    <div className={styles.modalTitle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const ModalBody = ({ children }: IModalBody) => {
  return <div className={styles.modalBody}>{children}</div>;
};

const ModalFooter = ({ children }: IModalFooter) => {
  return <div className={styles.modalFooter}> {children}</div>;
};

export { Overlay, Modal, ModalTitle, ModalFooter, ModalBody };
