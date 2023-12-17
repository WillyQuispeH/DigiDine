import React from "react";
import styles from "./Figma.module.scss";
import { useParams, useRouter } from "next/navigation";

const ProItem = () => {
  return (
    <div className={styles.contentDragAndDrop}>
      <h1 className={styles.title}>Shared</h1>
    </div>
  );
};

export default ProItem;
