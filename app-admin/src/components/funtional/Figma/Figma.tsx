"use client";
import Movil from "@/components/ui/Movil";
import React, { useEffect } from "react";
import Category from "./Category";
import styles from "./Figma.module.scss";
import Product from "./Product";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useComercio, useUi } from "@/store/hooks";
import { IProduct } from "@/interfaces/product";
import { ICategory } from "@/interfaces/category";
import useProduct from "@/store/hooks/useProduct";
import { useParams } from "next/navigation";
import Shared from "./Shared";
import ProItem from "./ProItem";

const Figma = () => {
  const params = useParams();
  const { comercio, setComercio, getByIdComercio } = useComercio();
  const { getAllByRestaurantId, listProduct, resetProduct } = useProduct();
  const { stageUi } = useUi();
  const { category, restaurant } = comercio;

  const handleDrop = (product: IProduct, targetCategoryId: string) => {
    const isProductInCategory = category
      .find((category) => category.id === targetCategoryId)
      ?.products.some((p) => p.id === product.id);

    if (!isProductInCategory) {
      const newData = category?.map((category: ICategory) =>
        category.id === targetCategoryId
          ? { ...category, products: [...category.products, product] }
          : category
      );
      setComercio({ ...comercio, category: newData });
    }
  };

  useEffect(() => {
    if (restaurant.id) {
      getAllByRestaurantId(restaurant.id as string);
    }
  }, [restaurant]);

  useEffect(() => {
    if (!comercio.comercio.id) {
      getByIdComercio(params.comercio as string);
    }
  }, []);

  return (
    <div className={styles.figma}>
      <div className={styles.contentFigmaEdit}>
        <DndProvider backend={HTML5Backend}>
          {(stageUi === "product" || stageUi === "category") && (
            <>
              <Product
                name="Todos"
                id="todos"
                products={listProduct}
                onDrop={(product) => handleDrop(product, "todos")}
              />
              <Category />
            </>
          )}
          {stageUi === "shared" && <Shared />}
          {stageUi === "proItem" && <ProItem />}
        </DndProvider>
      </div>
      <div className={styles.contentMoviPreview}>
        <Movil />
      </div>
    </div>
  );
};

export default Figma;
