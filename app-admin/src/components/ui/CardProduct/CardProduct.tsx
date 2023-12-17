import React from "react";
import styles from "./CardProduct.module.scss";
import { useUi } from "@/store/hooks";
import { IProduct } from "@/interfaces/product";
import useProduct from "@/store/hooks/useProduct";

interface ICardProduct {
  product: IProduct;
}

const CardProduct = ({ product }: ICardProduct) => {
  const { setStageUi } = useUi();
  const { setProduct } = useProduct();

  return (
    <div
      className={styles.cardProduct}
      onClick={() => {
        setStageUi("proItem");
        setProduct(product);
      }}
    >
      <div className={styles.contenImg}>
        <img src={product.img} alt="ImgPrd" />
        <div className={styles.favorite}>
          <span className="material-symbols-outlined">award_star</span>4.5
        </div>
      </div>
      <div className={styles.contenName}>{product.name}</div>
      <div className={styles.price}>
        <p>{`$ ${product.price}`}</p>
        <span className="material-symbols-outlined">favorite</span>
      </div>
    </div>
  );
};

export default CardProduct;
