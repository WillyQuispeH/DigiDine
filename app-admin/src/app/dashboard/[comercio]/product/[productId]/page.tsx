"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  return <div>{productId}</div>;
};

export default ProductPage;
