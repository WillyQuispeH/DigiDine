import React, { useState } from "react";
import styles from "./Favorite.module.scss";

interface IFavorite {
  onClick: () => void;
  active: boolean;
}

const Favorite: React.FC<IFavorite> = ({ onClick, active }) => {
  const [rotate, setRotate] = useState(false);

  const handleButtonClick = () => {
    onClick();
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  };

  return (
    <button
      className={styles.favorite}
      onClick={handleButtonClick}
      style={{
        color: active ? "#fff" : "#ff0000",
        background: active ? "#d17842" : "#fff",
        pointerEvents: active ? "none" : "all",
      }}
    >
      <span
        id="favoriteSpan"
        className={`material-symbols-outlined ${styles.icon} ${
          rotate ? styles.rotate : ""
        }`}
      >
        {active ? "heart_check" : "favorite"}
      </span>
    </button>
  );
};

export default Favorite;
