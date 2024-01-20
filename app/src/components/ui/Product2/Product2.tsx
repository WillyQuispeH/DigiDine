import { IProduct } from "@/interfaces/product";
import React, { useEffect } from "react";

import styles from "./Product2.module.scss";
import { useProduct, useUi } from "@/store/hooks";
import Favorite from "../Favorite";
interface IProduct2 {
  product: IProduct;
}

const Product2: React.FC<IProduct2> = ({ product }) => {
  const { addFavorite, resetProduct, product: response } = useProduct();
  const { addFavoriteProduct, listFavoriteProduct } = useUi();

  useEffect(() => {
    if (response.id) {
      addFavoriteProduct(response.id);
    }
  }, [response]);

  const isFavorite = listFavoriteProduct.includes(product.id);

  return (
    <>
      <div className={styles.product2}>
        <img className={styles.imgProduct2} src={product.img} alt="" />
        <h1 className={styles.contenName}>{product.name}</h1>
        <div className={styles.price}>
          <p>{`$ ${product.price}`}</p>
          <Favorite
            onClick={() => addFavorite(product.id)}
            active={isFavorite}
          />
        </div>
      </div>
    </>
  );
};

export default Product2;
