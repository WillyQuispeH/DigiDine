import React from "react";
import styles from "./Imagen.module.scss";
import Skeleton from "../Skeleton";

interface IImage {
  img: string;
  width: string;
  height: string;
  alt: string;
  load: boolean;
}

const Image = ({ img, width, height, alt, load }: IImage) => {
  let val;
  const handleImageLoad = (e: any) => {
    console.log(e);
    val = e;
  };

  console.log({ val });
  return (
    <div style={{ width, height }}>
      {load ? (
        <Skeleton />
      ) : (
        <img
          className={styles.img}
          src={img}
          alt={alt}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default Image;
