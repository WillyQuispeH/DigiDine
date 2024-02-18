"use client";
import { useProduct, useScroll } from "@/store/hooks";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./Porduct.module.scss";
import { formatPrice } from "@/utils/format";
import CardType from "@/components/ui/CartType";
import { IIngredient } from "@/interfaces/product";
import Reviews from "@/components/ui/Reviews";
import AddReview from "@/components/ui/AddReview";
import Skeleton from "@/components/ui/Skeleton";
import Image from "@/components/ui/Image";

const Product = () => {
  const { getByIdProduct, product, loadingProduct } = useProduct();
  const { setScroll } = useScroll();
  const params = useParams();

  useEffect(() => {
    if (params.productId) {
      getByIdProduct(params.productId as string);
      setScroll(false);
    }
  }, [params.productId]);

  return (
    <div className={styles.product}>
      {/* <img className={styles.imgProdutct} src={product.img} alt="" /> */}
      <Image
        load={loadingProduct}
        img={product.img}
        width="100%"
        height=" 80vh"
        alt="iamgen"
      />

      <div className={styles.contentInfoPro}>
        <div className={styles.principal}>
          <h1>{product.name}</h1>
          <h2>
            {product.favorite + "  "}
            Favoritos
            <span className="material-symbols-outlined">favorite</span>
          </h2>
        </div>
        <Title title="Precio" />

        <h3 className={styles.price}>{formatPrice(product.price)}</h3>

        <Title title="Descripción" />

        <h4 className={styles.description}>{product.description}</h4>
        <Title title="Clasificación" />

        <CardType />
        {product.ingredients && (
          <Ingredients ingredients={product.ingredients} />
        )}
        <AddReview />
        <Reviews />
      </div>
    </div>
  );
};

export default Product;

interface IIngreProsp {
  ingredients: IIngredient[];
}

const Ingredients = ({ ingredients }: IIngreProsp) => {
  return (
    <div className={styles.ingredients}>
      <Title title="Ingredientes de referencia" />
      <div className={styles.contentIngredients}>
        {ingredients?.map((item, key) => (
          <div className={styles.itemIngredients} key={key}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return <h1 className={styles.titleIngredients}>{title}</h1>;
};
