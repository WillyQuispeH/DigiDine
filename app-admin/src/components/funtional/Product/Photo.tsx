"use client";
import React from "react";
import Form from "@/components/ui/Form";
import ImgCropper from "@/components/ui/ImgCropper";
import useProduct from "@/store/hooks/useProduct";

const Photo = () => {
  const { product: productData } = useProduct();
  const { product } = productData;
  return (
    <Form title="Foto del producto" isValid={product.img ? true : false}>
      <ImgCropper />
    </Form>
  );
};

export default Photo;
