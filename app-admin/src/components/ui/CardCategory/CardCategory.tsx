import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./CardCategory.module.scss";

interface ICardCategory {
  alignItems: "flex-start" | "flex-end" | "center";
  category: string;
  img: string;
  count: number;
  id: string;
}

const CardCategory = ({
  alignItems,
  category,
  img,
  count,
  id,
}: ICardCategory) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={styles.cardCategory}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className={styles.categoryInfo} style={{ alignItems }}>
        <h1>{category}</h1>
        <span>{`${count} productos`}</span>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default CardCategory;
