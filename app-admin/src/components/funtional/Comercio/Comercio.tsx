"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";

const Comercio = () => {
  const params = useParams();

  return <div>{params.comercio}</div>;
};

export default Comercio;
