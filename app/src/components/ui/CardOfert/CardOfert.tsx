import React, { useState, useEffect } from "react";
import styles from "./CardOfet.module.scss";
import Image from "next/image";

interface CardScrollProps {
  cards: { img: string; name: string; oferta: string; des: string }[];
}

const CardOfert: React.FC<CardScrollProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.cardSlider}>
      <button className={styles.navButtonL} onClick={prevSlide}>
        <span className="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
      </button>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url('http://res.cloudinary.com/dzfg8xnxn/image/upload/v1702867529/mfbg5orwi5kjo77hfkrl.jpg')`,
          }}
          className={`${styles.card} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <img src={card.img} alt="" />
          <div className={styles.contentInfo}>
            <p>{card.oferta}</p>
            <h1> {card.name}</h1>
            <span>{card.des}</span>
          </div>
        </div>
      ))}
      <button className={styles.navButtonR} onClick={nextSlide}>
        <span className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>
  );
};

export default CardOfert;
