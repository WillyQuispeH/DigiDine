import React from "react";
import { useRouter } from "next/navigation";

const Foma = () => {
  const router = useRouter();
  return <div onClick={() => router.push(`/category/shared`)}>Ir A SAHRED</div>;
};

export default Foma;
