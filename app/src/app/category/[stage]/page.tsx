"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import Foma from "@/components/funtional/Foma";
import Category from "@/components/funtional/Category";
import Shared from "@/components/funtional/Shared";
const PageWelcome = () => {
  const { stage } = useParams();

  return (
    <>
      {stage}
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        {stage === "category" && <Category />}
        {stage === "forma" && <Foma />}
        {stage === "shared" && <Shared />}
      </div>
    </>
  );
};

export default PageWelcome;
