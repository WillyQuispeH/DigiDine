import React, { useEffect } from "react";
import styles from "./Product1.module.scss";
import { IProduct } from "@/interfaces/product";
import { useProduct, useUi } from "@/store/hooks";
import Favorite from "../Favorite";
import { useRouter } from "next/navigation";
import withScrollAnimation from "../framer";

interface IProduct1 {
  product: IProduct;
}

const Product1: React.FC<IProduct1> = ({ product }) => {
  const { addFavorite, resetProduct, product: response } = useProduct();
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
    <AnimatedDiv>
      <div className={styles.cardProduct} onClick={() => handleOnProduct()}>
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
          <Favorite
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addFavorite(product.id);
            }}
            active={isFavorite}
          />
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Product1;
