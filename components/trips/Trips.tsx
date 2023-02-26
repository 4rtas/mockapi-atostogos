import React from "react";
import styles from "./trips.module.css";
import Router from "next/router";

type TripsType = {
  imgUrl: string;
  destination: string;
  date: string;
  id: string;
  price: string;
};

const Trips: React.FC<TripsType> = ({
  imgUrl,
  destination,
  date,
  id,
  price,
}) => {
  const onClickHandler = () => {
    Router.push(`/trip/${id}`);
  };

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.image} alt="trip" src={imgUrl} />
        <h1>{price}$</h1>
      </div>
      <div className={styles.content}>
        <h1 className={styles.destination}>{destination}</h1>
        <h5 className={styles.about}>{date}</h5>
      </div>
    </div>
  );
};
export default Trips;
