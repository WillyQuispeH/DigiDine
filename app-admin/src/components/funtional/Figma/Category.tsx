"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useCategory, useComercio, useFile, useUi } from "@/store/hooks";
import DDCategory from "@/components/ui/DragAndDrop/DDCategory";

import { dataTypeClass } from "@/data/typeClass";

import styles from "./Figma.module.scss";
import { IProduct } from "@/interfaces/product";
import { ICategory, initDataCatgory } from "@/interfaces/category";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import ComboBox from "@/components/ui/ComboBox";
import Loader from "@/components/ui/Loader";
import BtnIconText from "@/components/ui/BtnIconText";

type ITarget = React.ChangeEvent<HTMLInputElement>;

const Category = () => {
  const { comercio, setComercio } = useComercio();
  const { createCategory, category: categoryNew } = useCategory();
  const { addFile, resetFile, file, loadingFile } = useFile();
  const [modal, setModal] = useState(false);
  const { category } = comercio;

  const [newCa, setNewCa] = useState<ICategory>(initDataCatgory);

  const handleDrop = (product: IProduct, targetCategoryId: string) => {
    const isProductInCategory = category
      .find((category) => category.id === targetCategoryId)
      ?.products?.some((p) => p.id === product.id);

    if (!isProductInCategory) {
      const newData = category?.map((category: ICategory) =>
        category.id === targetCategoryId
          ? { ...category, products: [...(category.products || []), product] }
          : category
      );
      setComercio({ ...comercio, category: newData });
    }
  };

  const handleAddCategory = () => {
    setNewCa(initDataCatgory);
    createCategory(
      newCa.name,
      newCa.img,
      comercio.comercio.id,
      newCa.classe,
      newCa.description,
      2
    );
    resetFile();
  };

  useEffect(() => {
    if (categoryNew.id) {
      setComercio({
        ...comercio,
        category: [categoryNew, ...(category || [])],
      });
    }
  }, [categoryNew]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = category.findIndex(
        (category) => category.id === active.id
      );
      const newIndex = category.findIndex(
        (category) => category.id === over.id
      );

      const updatedCategoryList = arrayMove([...category], oldIndex, newIndex);

      setComercio({ ...comercio, category: updatedCategoryList });
    }
  };

  const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      addFile(formData);
    }
  };

  useEffect(() => {
    if (file) {
      setNewCa({ ...newCa, img: file.url });
    }
  }, [file]);

  return (
    <>
      <div className={styles.contentDragAndDropProductOrder}>
        <h1 className={styles.title}>
          Ordenar categorias{" "}
          <BtnIconText
            width="30px"
            icon="  add_notes"
            onClick={() => {
              setModal(true);
            }}
          />
        </h1>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={category || []}
            strategy={verticalListSortingStrategy}
          >
            <div className={styles.contentFigmaCategory}>
              {category?.map((category, key) => (
                <DDCategory
                  id={category.id}
                  name={category.name}
                  class={category.classe}
                  key={category.id}
                  products={category.products}
                  onDrop={(product) => handleDrop(product, category.id)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      <Modal
        title="Nueva categoria"
        onClicAcept={handleAddCategory}
        textAcept="Registrar"
        textCancel="Cancelar"
        modal={modal}
        setModal={() => setModal(false)}
        validAcept={
          newCa.classe !== "0" &&
          newCa.name !== "" &&
          newCa.img &&
          newCa.description !== ""
            ? true
            : false
        }
      >
        <div className={styles.contenNewCategory}>
          <Input
            onChange={({ target }: ITarget) => {
              setNewCa({ ...newCa, id: target.value, name: target.value });
            }}
            value={newCa.name}
            type="text"
            label="Nombre"
            width="286px"
            name="name"
            isValid={true}
          />
          <Input
            onChange={({ target }: ITarget) => {
              setNewCa({ ...newCa, description: target.value });
            }}
            value={newCa.description}
            type="text"
            label="Descripción"
            width="286px"
            name="description"
            isValid={true}
          />
          <ComboBox
            label="Tipo de categoria"
            data={dataTypeClass}
            onChange={({ target }: ITarget) => {
              setNewCa({ ...newCa, classe: target.value });
            }}
            value={newCa.classe}
            name="class"
            textName="name"
            valueName="value"
            isValid={"comboBox"}
            width="286px"
          />
          <div className={styles.contenInput}>
            <label htmlFor={"newCategory213"}>
              {loadingFile ? (
                <Loader width="30px" />
              ) : (
                <span className="material-symbols-outlined">cloud_upload</span>
              )}
              {file.public_id ? file.public_id : "Subir foto de fondo"}
            </label>
            <input
              type="file"
              id={"newCategory213"}
              onChange={handleOnChangeFile}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Category;
