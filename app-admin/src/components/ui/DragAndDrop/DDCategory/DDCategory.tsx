import React, { ChangeEvent } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./DDCategory.module.scss";
import { ICategoryListUi } from "@/interfaces/category";
import { useCategory, useFile } from "@/store/hooks";
import { useParams } from "next/navigation";

const DDCategory = ({ id, name, img, products }: ICategoryListUi) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const params = useParams();
  const { updateImg } = useCategory();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(e.target.id);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category_id", e.target.id);
      formData.append("comercio_id", params.comercio as string);
      handleFileUpload(formData);
    }
  };

  const handleFileUpload = (formData: FormData) => {
    updateImg(formData);
  };

  return (
    <div
      className={styles.ddcategory}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {name} {products?.length}
      <div className={styles.contenInput}>
        <label htmlFor={id}>
          <span className="material-symbols-outlined">cloud_upload</span>Fondo
        </label>
        <input type="file" id={id} onChange={handleOnChangeFile} />
      </div>
    </div>
  );
};

export default DDCategory;
