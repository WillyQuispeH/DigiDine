"use client";
import React, { useState, useEffect } from "react";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { Row, Column } from "@/components/layout/Generic";
import ButtonIcon from "@/components/ui/ButtonIcon";
import CardIngredients from "@/components/ui/CardIngredients";
import { validateForm } from "@/util/validate";

import styles from "./ProductOrder.module.scss";
import useProduct from "@/store/hooks/useProduct";

const initData: Record<string, { value: string; isValid: boolean }> = {
  id: { value: "", isValid: true },
  name: { value: "", isValid: true },
};
interface IIngredients {
  id: string;
  name: string;
}
const Ingredients = () => {
  const [form, setForm] = useState(initData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);

  const { product, setProduct } = useProduct();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value === "" ? false : true,
      },
    });
  };

  const handleOnchangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      calories: {
        value: e.target.value.replace(/[^\d.]/g, ""),
        isValid: e.target.value !== "",
      },
    });
  };

  const handleDeleteIngredients = (name: string) => {
    const data = ingredients.filter((ingredient) => ingredient.name !== name);
    setIngredients(data);

    setProduct({
      ...product,
      ingredients: data,
    });
  };

  const handleAddIngredients = () => {
    const newIngredient: IIngredients = {
      id: "",
      name: form.name.value,
    };

    setForm(initData);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    setProduct({
      ...product,
      ingredients: [...ingredients, newIngredient],
    });
  };

  useEffect(() => {
    setIsFormValid(validateForm(form, ["name"]));
  }, [form]);

  return (
    <Form title="Ingredientes" isValid={ingredients?.length !== 0}>
      <Column gap="5px">
        <Row gap="5px">
          <Input
            onChange={handleOnchange}
            value={form.name.value}
            type="text"
            label="Nombre"
            width="255px"
            name="name"
            isValid={form.name.isValid}
          />
          <ButtonIcon
            onClick={handleAddIngredients}
            width="50px"
            height="50px"
            disabled={!isFormValid}
            icon="add"
          />
        </Row>
        <div className={styles.contentItems}>
          {ingredients?.map((item, key) => (
            <CardIngredients
              key={key}
              onClick={() => handleDeleteIngredients(item.name)}
              name={item.name}
              width="305px"
            />
          ))}
        </div>
      </Column>
    </Form>
  );
};

export default Ingredients;
