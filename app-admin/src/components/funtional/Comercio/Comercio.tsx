"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import LoaderLogo from "@/components/ui/LoaderLogo";
import ScreenLoader from "@/components/layout/ScreenLoader";

const Comercio = () => {
  const params = useParams();

  return <div>{params.comercio}</div>;
};

export default Comercio;
