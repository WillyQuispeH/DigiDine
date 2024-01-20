"use client";
import React, { useEffect } from "react";
import styles from "./CardProduct.module.scss";
import { useComercio } from "@/store/hooks";
import Link from "next/link";
import Product1 from "../Product1";

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
              <Link
                href={`/category/${category.id}`}
                className={styles.infoCategory}
              >
                <span className="material-symbols-outlined">page_info</span>
              </Link>
            </h1>
            <p>{category.description}</p>
          </div>
          <div className={styles.contentProduct}>
            {category.products.map((product, key) => (
              <Product1 key={key} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
