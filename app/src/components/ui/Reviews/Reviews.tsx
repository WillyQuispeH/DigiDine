import { useProduct } from "@/store/hooks";
import React from "react";
import styles from "./Reviews.module.scss";
const Reviews = () => {
  const { product } = useProduct();
  const reviews = product.reviews!;

  if (!reviews) {
    return <div className={styles.notReviews}>Sin reseñas</div>;
  }

  return (
    <div className={styles.reviews}>
      {reviews?.map((item, key) => (
        <div key={key} className={styles.reviewsItems}>
          <img className={styles.avatar} src={item.avatar} alt="" />
          <div className={styles.infoReview}>
            <h1>{item.user}</h1>
            <p>{item.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
