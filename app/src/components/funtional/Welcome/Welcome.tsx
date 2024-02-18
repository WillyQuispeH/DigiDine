"use client";
import styles from "./Welcome.module.scss";
import React, { useEffect } from "react";
import Comercio from "@/components/ui/Comercio";
import CardOfert from "@/components/ui/CardOfert";
import CardCatCircle from "@/components/ui/CardCatCircle";
import CardPrime from "@/components/ui/CardPrime";
import ScreenImg from "@/components/layout/ScreenImg";
import { useComercio } from "@/store/hooks";
import useNavigation from "@/hooksReact/useNavigation";

const Welcome = () => {
  const { comercio, getByIdNameComercio } = useComercio();
  const { param } = useNavigation();

  useEffect(() => {
    if (!comercio.comercio.id && param.n) {
      getByIdNameComercio(param.n as string);
    }
  }, []);

  const cards = [
    {
      img: "https://png.pngtree.com/png-clipart/20230629/original/pngtree-anime-girl-eating-noodles-png-image_9237162.png",
      des: "Contenido de la tarjeta 1",
      name: "mi nombre 1",
      oferta: "Solo hoy !!",
    },
    {
      img: "https://png.pngtree.com/png-clipart/20230629/original/pngtree-anime-girl-eating-noodles-png-image_9237162.png",
      des: "Contenido de la tarjeta  de la tarjeta 2",
      name: "mi nombre 2",
      oferta: "$ 5000",
    },
    {
      img: "https://png.pngtree.com/png-clipart/20230629/original/pngtree-anime-girl-eating-noodles-png-image_9237162.png",
      des: "Contenido de la tarjeta 3",
      name: "mi nombre 3",
      oferta: "% 50 Des.",
    },
  ];

  return (
    <div className={styles.welcome}>
      <ScreenImg img="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg">
        <Comercio />
      </ScreenImg>
      <div>
        <CardOfert cards={cards} />
      </div>
      <div>
        <CardCatCircle />
      </div>
      <div>
        <CardPrime />
      </div>
    </div>
  );
};

export default Welcome;
