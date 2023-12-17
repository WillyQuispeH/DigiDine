"use client";
import React from "react";
import styles from "./Category.module.scss";

import { useRouter, useParams } from "next/navigation";

const Category = () => {
  const router = useRouter();
  const params = useParams();

  const id = "forma";

  return (
    <div>
      <div
        className={styles.category}
        onClick={() => {
          router.push(`/category/${id}`);
        }}
      >
        IR FORMA
      </div>
    </div>
  );
};

export default Category;
