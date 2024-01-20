import React, { useEffect, useState } from "react";
import styles from "./Product1.module.scss";
import { IProduct } from "@/interfaces/product";
import { useProduct, useUi } from "@/store/hooks";
import Favorite from "../Favorite";

interface IProduct1 {
  product: IProduct;
}

const Product1: React.FC<IProduct1> = ({ product }) => {
  const { addFavorite, resetProduct, product: response } = useProduct();
  const { addFavoriteProduct, listFavoriteProduct } = useUi();

  useEffect(() => {
    if (response.id) {
      addFavoriteProduct(response.id);
    }
  }, [response]);
  const isFavorite = listFavoriteProduct.includes(product.id);

  return (
    <div className={styles.cardProduct}>
      <div className={styles.contenImg}>
        <img src={product.img} alt="ImgPrd" />
        <div className={styles.favorite}>
          <span className="material-symbols-outlined">award_star</span>
          4.5
        </div>
      </div>
      <div className={styles.contenName}>{product.name}</div>
      <div className={styles.price}>
        <p>{`$ ${product.price}`}</p>
        <Favorite onClick={() => addFavorite(product.id)} active={isFavorite} />
      </div>
    </div>
  );
};

export default Product1;
