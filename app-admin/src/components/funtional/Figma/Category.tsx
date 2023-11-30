"use client";
import React, { useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useCategory, useUi } from "@/store/hooks";
import DDCategory from "@/components/ui/DragAndDrop/DDCategory";

import styles from "./Figma.module.scss";
import { useParams } from "next/navigation";

const Category = () => {
  const { setCategoryUi, categoryListUi } = useUi();
  const params = useParams();

  const { getByComercioId, categoryList } = useCategory();

  useEffect(() => {
    if (categoryListUi.length === 0) {
      getByComercioId(params.comercio as string);
    }
  }, []);

  useEffect(() => {
    if (categoryList) {
      setCategoryUi(categoryList);
    }
  }, [categoryList]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = categoryListUi.findIndex(
        (category) => category.id === active.id
      );
      const newIndex = categoryListUi.findIndex(
        (category) => category.id === over.id
      );

      const updatedCategoryList = arrayMove(
        [...categoryListUi],
        oldIndex,
        newIndex
      );

      setCategoryUi(updatedCategoryList);
    }
  };
  return (
    <div className={styles.contentDragAndDrop}>
      <h1 className={styles.title}>Ordenar categorias</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={categoryListUi}
          strategy={verticalListSortingStrategy}
        >
          {categoryListUi.map((category, key) => (
            <DDCategory
              key={category.id}
              img={category.img}
              products={category.products}
              name={category.name}
              id={category.id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Category;
