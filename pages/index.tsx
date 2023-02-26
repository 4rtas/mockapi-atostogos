import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Trips from "../components/trips/Trips";
import Navbar from "components/navbar/navbar";
import Button from "components/btn/btn";
import Router from "next/router";

export default function Home() {
  const [trips, setTrips] = useState<any>([]);

  const fetchTrips = async () => {
    const response = await axios.get(
      "https://63ea993334bcb76dd51048c8.mockapi.io/Flights"
    );

    setTrips(response.data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const onClickHandler = () => {
    Router.push(`/insertTrip`);
  };

  return (
    <>
      <Navbar />
      <div className={styles.btnWrapper}>
        <Button onClick={onClickHandler} text="Book Holiday proposition" />
      </div>
      <div className={styles.tripsWrapper}>
        {trips.map((data: any) => {
          return (
            <Trips
              id={data.id}
              imgUrl={data.imageUrl}
              destination={data.destination}
              date={data.date}
              price={data.price}
            />
          );
        })}
      </div>
    </>
  );
}
