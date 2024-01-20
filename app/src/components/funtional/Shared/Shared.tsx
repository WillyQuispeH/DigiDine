"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Shared.module.scss";
import CardSocial from "@/components/ui/CardSocial";
import Qr from "@/components/ui/Qr";

import ScreenImg from "@/components/layout/ScreenImg";

const Shared = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const dataSocial = [
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      name: "Facebook",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      name: "Facebook",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      name: "Facebook",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      name: "Facebook",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg",
      name: "Facebook",
    },
  ];

  const images = [
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
    "https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702868213/vrfvsoo7q1wkhgfxgwqq.jpg",
  ];

  return (
    <div className={styles.shared}>
      <ScreenImg img="https://res.cloudinary.com/dzfg8xnxn/image/upload/v1702867388/lmkcgnhzpcq9vdt3xitt.jpg">
        <div className={styles.contenTitle}>
          <p className={styles.msgInicio}>Compartir</p>
        </div>
      </ScreenImg>
      <div className={styles.contenQrSocial}>
        <Qr />
        <div className={styles.sharedSocial}>
          {dataSocial?.map((item, key) => (
            <CardSocial key={key} img={item.img} name={item.name} />
          ))}
        </div>
      </div>
      <div className={styles.contenImge}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Shared;
