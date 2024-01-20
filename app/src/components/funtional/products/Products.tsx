import React from "react";
import ScreenImg from "@/components/layout/ScreenImg";
import CardProduct from "@/components/ui/CardProduct";

import styles from "./Product.module.scss";
import ScreenLike from "@/components/layout/ScreenLike";

const Product = () => {
  return (
    <div>
      <div className={styles.product}>
        <ScreenImg img="https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702867529/mfbg5orwi5kjo77hfkrl.jpg">
          <div className={styles.contenTitle}>
            <p className={styles.msgInicio}>Productos</p>
          </div>
        </ScreenImg>
      </div>

      <div>
        <CardProduct />
      </div>
    </div>
  );
};

export default Product;
