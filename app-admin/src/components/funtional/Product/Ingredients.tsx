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
  name: { value: "", isValid: true },
  calories: { value: "", isValid: true },
};
interface IIngredients {
  name: string;
  calories: number;
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
      name: form.name.value,
      calories: parseInt(form.calories.value),
    };
    setForm(initData);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    setProduct({
      ...product,
      ingredients: [...ingredients, newIngredient],
    });
  };

  useEffect(() => {
    setIsFormValid(validateForm(form, ["name", "calories"]));
  }, [form]);

  return (
    <Form title="Ingredientes" isValid={ingredients?.length !== 0}>
      <Column gap="5px">
        <Input
          onChange={handleOnchange}
          value={form.name.value}
          type="text"
          label="Nombre"
          width="305px"
          name="name"
          isValid={form.name.isValid}
        />
        <Row gap="5px">
          <Input
            onChange={handleOnchangePrice}
            value={form.calories.value}
            type="text"
            label="Calorias"
            width="250px"
            name="calories"
            isValid={form.calories.isValid}
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
              calories={item.calories}
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
