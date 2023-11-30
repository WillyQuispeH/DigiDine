import { useUi } from "@/store/hooks";
import React from "react";
import CardCategory from "../../CardCategory";

import styles from "./Category.module.scss";
import Header from "../Header";

const Category = () => {
  const { categoryListUi } = useUi();

  return (
    <div className={styles.category}>
      <Header img="/comida.jpg" title="Categorias" />
      {categoryListUi.map((category, key) => (
        <CardCategory
          key={category.id}
          id={category.id}
          alignItems="flex-start"
          category={category.name}
          img={category.img}
          count={category.products.length}
        />
      ))}
    </div>
  );
};

export default Category;
