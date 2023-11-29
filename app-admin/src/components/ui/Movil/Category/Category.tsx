import { useUi } from "@/store/hooks";
import React from "react";
import CardCategory from "../../CardCategory";

import styles from "./Category.module.scss";
import Header from "../Header";

const Category = () => {
  const { categoryList, setCategory } = useUi();

  return (
    <div className={styles.category}>
      <Header img="/comida.jpg" title="Categorias" />
      {categoryList.map((category) => (
        <CardCategory
          key={category.id}
          id={category.id}
          alignItems="flex-end"
          category={category.name}
          img="/foto4.jpg"
          count={5}
        />
      ))}
    </div>
  );
};

export default Category;
