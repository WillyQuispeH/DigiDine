"use client";
import React, { useEffect } from "react";
import styles from "./CardProduct.module.scss";
import { useComercio } from "@/store/hooks";
import Link from "next/link";

const CardProduct = () => {
  const { comercio, getByIdComercio } = useComercio();

  useEffect(() => {
    if (!comercio.comercio.id) {
      getByIdComercio("ae584ccd-b691-4619-aabf-7b15539743ee");
    }
  }, []);

  const { category } = comercio;

  return (
    <div>
      {category.map((category, key) => (
        <div key={key} className={styles.contenCategory}>
          <div className={styles.cotentTilteCat}>
            <h1>
              {category.name}
              <Link href={`/category/${category.id}`}>
                <span className="material-symbols-outlined">page_info</span>
              </Link>
            </h1>
            <p>{category.description}</p>
          </div>
          <div className={styles.contentProduct}>
            {category.products.map((product, key) => (
              <div key={key} className={styles.cardProduct} onClick={() => {}}>
                <div className={styles.contenImg}>
                  <img src={product.img} alt="ImgPrd" />
                  <div className={styles.favorite}>
                    <span className="material-symbols-outlined">
                      award_star
                    </span>
                    4.5
                  </div>
                </div>
                <div className={styles.contenName}>{product.name}</div>
                <div className={styles.price}>
                  <p>{`$ ${product.price}`}</p>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
