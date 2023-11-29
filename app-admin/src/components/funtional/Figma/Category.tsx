"use client";
import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useUi } from "@/store/hooks";
import DDCategory from "@/components/ui/DragAndDrop/DDCategory";

import styles from "./Figma.module.scss";

const Category = () => {
  const { setCategory, categoryList } = useUi();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = categoryList.findIndex(
        (person) => person.id === active.id
      );
      const newIndex = categoryList.findIndex(
        (person) => person.id === over.id
      );

      const updatedCategoryList = arrayMove(
        [...categoryList],
        oldIndex,
        newIndex
      );

      setCategory(updatedCategoryList);
    }
  };

  return (
    <div className={styles.contentDragAndDrop}>
      <h1 className={styles.title}>Ordenar categorias</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={categoryList}
          strategy={verticalListSortingStrategy}
        >
          {categoryList.map((user) => (
            <DDCategory key={user.id} name={user.name} id={user.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Category;
