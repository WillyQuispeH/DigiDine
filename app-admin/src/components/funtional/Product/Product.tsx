"use client";
import React, { useState, useEffect } from "react";

import Form from "@/components/ui/Form";
import { Column, Row } from "@/components/layout/Generic";
import Input from "@/components/ui/Input";
import CardEtiq from "@/components/ui/CardEtiq";
import { validateForm } from "@/util/validate";
import useProduct from "@/store/hooks/useProduct";

const initData: Record<string, { value: string; isValid: boolean }> = {
  name: { value: "", isValid: true },
  description: { value: "", isValid: true },
  price: { value: "", isValid: true },
};

const Product = () => {
  const [form, setForm] = useState(initData);
  const [isFormValid, setIsFormValid] = useState(false);
  const { product, setProduct } = useProduct();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value === "" ? false : true,
      },
    });

    setProduct({
      ...product,
      product: { ...product.product, [e.target.name]: e.target.value },
    });
  };

  const handleOnchangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      price: {
        value: e.target.value.replace(/[^\d.]/g, ""),
        isValid: e.target.value !== "",
      },
    });

    setProduct({
      ...product,
      product: { ...product.product, price: parseInt(e.target.value) },
    });
  };

  useEffect(() => {
    setIsFormValid(validateForm(form, ["name", "description", "price"]));
  }, [form]);

  console.log(product);
  return (
    <Form title="Productos" isValid={isFormValid}>
      <Column gap="5px">
        <Row gap="5px">
          <Input
            onChange={handleOnchange}
            value={form.name.value}
            type="text"
            label="Nombre"
            width="193px"
            name="name"
            isValid={form.name.isValid}
          />
          <CardEtiq width="140px" text="Producto" icon="lunch_dining" />
        </Row>
        <Input
          onChange={handleOnchange}
          value={form.description.value}
          type="text"
          label="Descripción"
          width="340px"
          name="description"
          isValid={form.description.isValid}
        />

        <Input
          onChange={handleOnchangePrice}
          value={form.price.value}
          type="text"
          label="Precio"
          width="200px"
          name="price"
          isValid={form.price.isValid}
        />
      </Column>
    </Form>
  );
};

export default Product;
