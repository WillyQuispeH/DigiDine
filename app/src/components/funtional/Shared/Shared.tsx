import React from "react";
import styles from "./Shared.module.scss";
import CardSocial from "@/components/ui/CardSocial";
import Qr from "@/components/ui/Qr";

const Shared = () => {
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
  return (
    <div className={styles.shared}>
      <div className={styles.contenQrSocial}>
        <Qr />
        <div className={styles.sharedSocial}>
          {dataSocial.map((item, key) => (
            <CardSocial key={key} img={item.img} name={item.name} />
          ))}
        </div>
      </div>
      <div className={styles.contenImge}>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          alt=""
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          alt=""
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          alt=""
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/19/28/8e/nuestra-charlie-burger.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Shared;
