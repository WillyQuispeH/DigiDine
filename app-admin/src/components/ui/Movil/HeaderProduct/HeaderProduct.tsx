import React from "react";

import styles from "./HeaderProduct.module.scss";

interface IHeaderProduct {
  img: string;
  title: string;
  favorite: number;
}

const HeaderProduct = ({ img, title, favorite }: IHeaderProduct) => {
  return (
    <div className={styles.headerMovilProduct}>
      <img src={img} alt={img} />
      <div className={styles.contenInfoProtImg}>
        <h1>{title}</h1>
        <div className={styles.productFavorite}>
          <span className="material-symbols-outlined">favorite</span>
          {favorite}
        </div>
      </div>
      <div className={styles.contenInfoPro}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil
          accusamus ipsa veritatis nobis officiis atque voluptatem necessitatib
        </p>
      </div>
    </div>
  );
};

export default HeaderProduct;
