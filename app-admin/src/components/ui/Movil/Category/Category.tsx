import { useComercio, useUi } from "@/store/hooks";
import React from "react";
import CardCategory from "../../CardCategory";

import styles from "./Category.module.scss";
import Header from "../Header";

const Category = () => {
  const { comercio } = useComercio();
  const { category } = comercio;

  return (
    <div className={styles.category}>
      <Header img="/comida.jpg" title="Categorias" />
      {category?.map((category, key) => (
        <CardCategory
          key={category.id}
          id={category.id}
          alignItems="flex-start"
          category={category.name}
          img={category.img}
          count={category?.products?.length || 0}
        />
      ))}
    </div>
  );
};

export default Category;
