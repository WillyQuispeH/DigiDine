import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./DDCategory.module.scss";

interface IDDCategory {
  id: string;
  name: string;
}
const DDCategory = ({ id, name }: IDDCategory) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className={styles.ddcategory}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {name}
    </div>
  );
};

export default DDCategory;
