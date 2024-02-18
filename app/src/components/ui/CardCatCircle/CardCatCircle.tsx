import React from "react";
import styles from "./Card.module.scss";
import { useComercio } from "@/store/hooks";
import withScrollAnimation from "../framer";
import { useRouter } from "next/navigation";

interface ICard {}

const CardCatCircle: React.FC<ICard> = () => {
  const router = useRouter();
  const { comercio } = useComercio();
  const { category } = comercio;
  const AnimatedDiv = withScrollAnimation("div");

  return (
    <div className={styles.contenCircles}>
      {category.map((card, key) => (
        <AnimatedDiv key={key}>
          <div
            className={`${styles.cardCatCircle} `}
            onClick={() => {
              router.push(`/category/${card.id}`);
            }}
          >
            <img src={card.img} alt="" />
            <p>{card.name}</p>
          </div>
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default CardCatCircle;
