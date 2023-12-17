import React from "react";
import { useDrag, DragPreviewImage, DragSourceMonitor } from "react-dnd";
import { IProduct } from "@/interfaces/product";

import styles from "./DDProduct.module.scss";
import { useComercio } from "@/store/hooks";
import { useParams, useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct;
  category_id: string;
  clase: string;
}

export const ItemTypes = {
  PRODUCT: "product",
};

interface DragObject {
  type: string;
  product: IProduct;
}

const claseStyles: Record<string, string> = {
  ofert: styles.DDProductOfert,
  original: styles.DDProduct,
  value3: styles.style3,
  value4: styles.style4,
  value5: styles.style5,
};

const DDProduct: React.FC<ProductProps> = ({ product, category_id, clase }) => {
  const router = useRouter();
  const params = useParams();
  const { comercio, setComercio } = useComercio();
  const { category } = comercio;

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: ItemTypes.PRODUCT,
    item: { type: ItemTypes.PRODUCT, product } as DragObject,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleDelete = () => {
    const result = category?.map((category, key) => {
      if (category.id === category_id) {
        const updatedProducts = category.products.filter(
          (prod) => prod.id !== product.id
        );
        return { ...category, products: updatedProducts };
      }
      return category;
    });

    setComercio({ ...comercio, category: result });
  };

  const handleUpdate = () => {
    router.push(`/dashboard/${params.comercio}/product/${product.id}`);
  };

  return (
    <div
      className={claseStyles[clase] || ""}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DragPreviewImage connect={dragPreview} src="" />
      <span
        className={`material-symbols-outlined  ${styles.buttonDelete}`}
        onClick={handleDelete}
      >
        delete
      </span>

      <p>{product.name}</p>
    </div>
  );
};

export default DDProduct;
