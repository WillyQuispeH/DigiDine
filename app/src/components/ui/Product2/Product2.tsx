import { IProduct } from "@/interfaces/product";
import React, { useEffect } from "react";
import styles from "./Product2.module.scss";
import { useProduct, useUi } from "@/store/hooks";
import Favorite from "../Favorite";
import { useRouter } from "next/navigation";
import withScrollAnimation from "../framer";

interface IProduct2 {
  product: IProduct;
}

const Product2: React.FC<IProduct2> = ({ product }) => {
  const { addFavorite, product: response } = useProduct();
  const { addFavoriteProduct, listFavoriteProduct } = useUi();
  const AnimatedDiv = withScrollAnimation("div");
  const router = useRouter();

  useEffect(() => {
    if (response.id) {
      addFavoriteProduct(response.id);
    }
  }, [response]);

  const isFavorite = listFavoriteProduct.includes(product.id);

  const handleOnProduct = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <AnimatedDiv className={styles.product2} onClick={() => handleOnProduct()}>
      <img className={styles.imgProduct2} src={product.img} alt="" />
      <h1 className={styles.contenName}>{product.name}</h1>
      <div className={styles.price}>
        <p>{`$ ${product.price}`}</p>
        <Favorite onClick={() => addFavorite(product.id)} active={isFavorite} />
      </div>
    </AnimatedDiv>
  );
};

export default Product2;
