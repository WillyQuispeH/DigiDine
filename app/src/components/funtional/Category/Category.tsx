"use client";
import React from "react";
import styles from "./Category.module.scss";

import { useRouter, useParams } from "next/navigation";

const Category = () => {
  const params = useParams();

  return (
    <div>
      <div className={styles.category}>{params.categoryId}</div>
    </div>
  );
};

export default Category;
