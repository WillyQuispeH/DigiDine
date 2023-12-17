import React, { ChangeEvent, useEffect } from "react";

import { useCategory, useComercio } from "@/store/hooks";
import { useParams } from "next/navigation";
import DDProduct from "../DDProduct";
import { IProduct } from "@/interfaces/product";

import { useDrop } from "react-dnd";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./DDCategory.module.scss";
import BtnIconText from "../../BtnIconText";

interface ColumnProps {
  products: IProduct[];
  id: string;
  name: string;
  class: string;
  onDrop: (product: IProduct, targetCategoryId: string) => void;
}
interface ITypeClass {
  s: string;
  name: string;
  type: string;
}

export const ItemTypes = {
  PRODUCT: "product",
};

const DDCategory = ({
  onDrop,
  products,
  id,
  name,
  class: clase,
}: ColumnProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PRODUCT,
    drop: (item: { product: IProduct }) => onDrop(item.product, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const params = useParams();
  const { updateImg, comercioCategory, deleteCategory } = useCategory();
  const { setComercio, comercio } = useComercio();
  const { category } = comercio;

  const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category_id", e.target.id);
      formData.append("comercio_id", params.comercio as string);
      handleFileUpload(formData);
    }
  };

  useEffect(() => {
    if (comercioCategory.comercio.id) {
      setComercio(comercioCategory);
    }
  }, [comercioCategory]);

  const handleFileUpload = (formData: FormData) => {
    updateImg(formData);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const claseStyles: Record<string, ITypeClass> = {
    ofert: {
      s: styles.ddcategoryOfert,
      name: "Oferta",
      type: styles.typeCategoryOfert,
    },
    original: {
      s: styles.ddcategory,
      name: "Original",
      type: styles.typeCategory,
    },
    value3: { s: styles.style3, name: "Original", type: styles.typeCategory },
    value4: { s: styles.style4, name: "Original", type: styles.typeCategory },
    value5: { s: styles.style5, name: "Original", type: styles.typeCategory },
  };

  const handleDeleteCategory = () => {
    const data = category.filter((item) => item.id !== id);
    setComercio({ ...comercio, category: data });
    deleteCategory(id);
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.ddcategoryMain}>
      <div
        className={claseStyles[clase].s || ""}
        ref={drop}
        style={{
          border: `1px solid ${isOver ? "#60b2e4" : "black"}`,
        }}
      >
        <div className={styles.contenTitle}>
          <div className={styles.contenVisualCategory}>
            {name}{" "}
            <p className={claseStyles[clase].type || ""}>
              {claseStyles[clase].name}
            </p>
          </div>
          <div className={styles.contenInput}>
            <BtnIconText
              icon="delete"
              width="30px"
              onClick={handleDeleteCategory}
            />
            <label htmlFor={id}>
              <span className="material-symbols-outlined">cloud_upload</span>
            </label>
            <button
              className={styles.buttonDropMove}
              {...attributes}
              {...listeners}
            >
              <span className="material-symbols-outlined">
                vertical_align_center
              </span>
            </button>

            <input type="file" id={id} onChange={handleOnChangeFile} />
          </div>
        </div>
        <div className={styles.contenProductDD}>
          {products?.map((product: IProduct, key) => (
            <DDProduct
              key={key}
              product={product}
              category_id={id}
              clase={clase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DDCategory;
