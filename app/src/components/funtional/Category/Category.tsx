"use client";
import React from "react";
import styles from "./Category.module.scss";

import { useRouter, useParams } from "next/navigation";
import CardCategory from "@/components/ui/CardCategory";
import { useComercio } from "@/store/hooks";
import { ICategory } from "@/interfaces/category";
import ScreenLike from "@/components/layout/ScreenLike";

const Category = () => {
  const params = useParams();
  const { comercio } = useComercio();
  const { category } = comercio;

  const select = category.find(
    (category: ICategory) => category.id === params.categoryId || ""
  );

  return (
    <div>
      <CardCategory category={select as ICategory} />
    </div>
  );
};

export default Category;
