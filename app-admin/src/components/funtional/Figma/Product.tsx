"use client";
import React, { useState } from "react";

import styles from "./Figma.module.scss";
import {
  useDrop,
  useDrag,
  DragPreviewImage,
  DragSourceMonitor,
} from "react-dnd";
import { IProduct, initData } from "@/interfaces/product";
import BtnIconText from "@/components/ui/BtnIconText";
import Modal from "@/components/ui/Modal";
import ProductOrder from "../Product";
import useProduct from "@/store/hooks/useProduct";
import { useComercio, useFile } from "@/store/hooks";
import { useParams, useRouter } from "next/navigation";
import ScreenLoader from "@/components/layout/ScreenLoader";

export const ItemTypes = {
  PRODUCT: "product",
};

interface ProductProps {
  product: IProduct;
}

interface DragObject {
  type: string;
  product: IProduct;
}

interface ColumnProps {
  products: IProduct[];
  id: string;
  name: string;
  onDrop: (product: IProduct, targetCategoryId: string) => void;
}

const Product = ({ onDrop, products, id, name }: ColumnProps) => {
  const [modal, setModal] = useState(false);

  const {
    createProduct,
    product,
    isValidProduct,
    loadingProduct,
    resetProduct,
  } = useProduct();
  const { fileBlob } = useFile();
  const { comercio } = useComercio();
  const { restaurant } = comercio;

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PRODUCT,
    drop: (item: { product: IProduct }) => onDrop(item.product, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleAddProduct = () => {
    const formData = new FormData();
    formData.append("file", fileBlob, "miImgen");
    formData.append("restaurant_id", restaurant.id);
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("favorite", product.favorite.toString());
    formData.append("description", product.description);
    formData.append("ingredients", JSON.stringify(product.ingredients));
    createProduct(formData);
  };
  console.log(comercio);
  return (
    <>
      <div className={styles.contentDragAndDrop}>
        <h1 className={styles.title}>
          Listado de productos{" "}
          <BtnIconText
            width="30px"
            icon="add_to_photos"
            onClick={() => setModal(true)}
          />
        </h1>
        <div className={styles.contentTodos} ref={drop}>
          {products?.map((product: IProduct, key: number) => (
            <ProductItem key={key} product={product} />
          ))}
        </div>
      </div>
      <ScreenLoader active={loadingProduct} />
      <Modal
        setModal={() => setModal(false)}
        modal={modal}
        title="Nuevo producto"
        onClicAcept={handleAddProduct}
        textAcept="Registrar"
        textCancel="Cancelar"
        validAcept={isValidProduct}
      >
        <ProductOrder />
      </Modal>
    </>
  );
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const params = useParams();
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: ItemTypes.PRODUCT,
    item: { type: ItemTypes.PRODUCT, product } as DragObject,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleUpdate = () => {
    router.push(`/dashboard/${params.comercio}/product/${product.id}`);
  };

  return (
    <div
      className={styles.productItem}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DragPreviewImage connect={dragPreview} src="" />

      <span
        className={`material-symbols-outlined  ${styles.buttonEdit}`}
        onClick={handleUpdate}
      >
        edit
      </span>
      <p>{product.name}</p>
    </div>
  );
};

export default Product;
