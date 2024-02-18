import React from "react";
import styles from "./CardType.module.scss";

const CardType = () => {
  const data = [
    {
      title: "Vegano",
      icon: "temp_preferences_eco",
      bg: "#00B20B",
    },
    {
      title: "Pescetariano",
      icon: "set_meal",
      bg: "#0025CE",
    },
    {
      title: "Sin gluten",
      icon: "lunch_dining",
      bg: "#DFC400",
    },
    {
      title: "Sin gluten",
      icon: "lunch_dining",
      bg: "#8700DF",
    },
  ];

  return (
    <div className={styles.cartType}>
      {data.map((item, key) => (
        <div
          key={key}
          className={styles.cartTypeITem}
          style={{ background: item.bg }}
        >
          <p>{item.title}</p>
          <span className="material-symbols-outlined">{item.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default CardType;
