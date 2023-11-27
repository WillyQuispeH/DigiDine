"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/ui/Form";
import CheckBox from "@/components/ui/CheckBox";
import styles from "./ProductOrder.module.scss";
import useProduct from "@/store/hooks/useProduct";

const dataC = [
  {
    id: "6w46d8asd51a3sd5w",
    name: "Frituras",
  },
  {
    id: "asasassd5w",
    name: "SandWich",
  },
  {
    id: "asasaassssd5w",
    name: "SandWich",
  },
];

const Category = () => {
  const [isCheked, setIsChecked] = useState(false);
  const [checkBox, setChexBox] = useState(
    dataC.map((item) => ({ ...item, check: true }))
  );

  const { product, setProduct } = useProduct();

  useEffect(() => {
    setIsChecked(checkBox.some((item) => item.check === true));

    setProduct({
      ...product,
      category: checkBox.filter((item) => item.check === true),
    });
  }, [checkBox]);

  useEffect(() => {
    if (dataC) {
      setChexBox(dataC.map((item) => ({ ...item, check: false })));
    }
  }, []);

  const handleOnchangeCheckBox = (id: string) => {
    setChexBox(
      checkBox.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        }
        return item;
      })
    );
  };

  return (
    <Form title="Categorias" isValid={isCheked}>
      <div className={styles.contentCategory}>
        {checkBox.map((item, key) => (
          <CheckBox
            key={key}
            onChange={() => handleOnchangeCheckBox(item.id)}
            checked={item.check}
            valor={item.name}
            width="150px"
            name={item.id}
          />
        ))}
      </div>
    </Form>
  );
};

export default Category;
