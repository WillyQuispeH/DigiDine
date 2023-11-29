import Movil from "@/components/ui/Movil";
import React from "react";
import Category from "./Category";
import styles from "./Figma.module.scss";
import Shared from "./Shared";
import Product from "./Product";

const Figma = () => {
  return (
    <div className={styles.figma}>
      <div className={styles.contentFigmaEdit}>
        <Product />
        <Category />
        <Shared />
      </div>
      <div className={styles.contentMoviPreview}>
        <Movil />
      </div>
    </div>
  );
};

export default Figma;
