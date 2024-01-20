"use client";
import React from "react";

import { useParams } from "next/navigation";
import CardCategory from "@/components/ui/CardCategory";
import { useComercio } from "@/store/hooks";
import { ICategory } from "@/interfaces/category";

const Category = () => {
  const params = useParams();
  const { comercio } = useComercio();
  const { category } = comercio;

  const select = category.find(
    (category: ICategory) => category.id === params.categoryId || ""
  );

  if (!select) {
    return null;
  }
  return (
    <div>
      <CardCategory category={select as ICategory} />
    </div>
  );
};

export default Category;
