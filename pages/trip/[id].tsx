import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "components/navbar/navbar";
import styles from "./trip.module.css";
import ActionButton from "components/ActionBtn/ActionBtn";

export default function FormPage() {
  const [Trip, setTrip] = useState<any>();

  const router = useRouter();

  const fetchTrip = async () => {
    const Trip = await axios.get(
      `https://63ea993334bcb76dd51048c8.mockapi.io/Flights/${router.query.id}`
    );
    setTrip(Trip.data);
    console.log(Trip.data);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchTrip();
    }
  }, [router.query]);

  const onClickHandler = () => {
    router.push(`https://www.youtube.com/watch?v=AWM5ZNdWlqw`);
  };
  return (
    <>
      <div>
        <Navbar />
        {Trip && (
          <div className={styles.main}>
            <div className={styles.content}>
              <div className={styles.details}>
                <h1>{Trip.destination}</h1>
                <h2>{Trip.date}</h2>
                <h3>{Trip.duration}</h3>
                <h4>{Trip.price}$</h4>
              </div>
              <div className={styles.actions}>
                <ActionButton
                  onClick={onClickHandler}
                  text="OK, leeets GOOOOOw!"
                />
              </div>
            </div>
            <img className={styles.header} src={Trip.imageUrl} />
          </div>
        )}
      </div>
    </>
  );
}
