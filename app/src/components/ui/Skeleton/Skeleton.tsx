import React from "react";
import styles from "./Skeleton.module.scss";

interface ISkeleton {
  type?: string;
}
const Skeleton = ({ type }: ISkeleton) => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.animatedBackground}>
        <div className={styles.skelMaskContainer}></div>
      </div>
    </div>
  );
};

export default Skeleton;
