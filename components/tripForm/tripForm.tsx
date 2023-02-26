import React, { useState } from "react";
import styles from "./tripForm.module.css";
import Input from "components/input/input";
import Button from "components/btn/btn";
import axios from "axios";
import router from "next/router";

const TripForm: React.FC = () => {
  const [Destination, setDestination] = useState();
  const [Date, setDate] = useState();
  const [Duration, setDuration] = useState();
  const [imageURL, setImageURL] = useState();
  const [Price, setPrice] = useState();

  const onClickHandler = () => {
    console.log(Destination, Date, Duration, imageURL, Price);

    const tripData = {
      destination: Destination,
      date: Date,
      duration: Duration,
      imageUrl: imageURL,
      price: Price,
    };

    const response = axios.post(
      "https://63ea993334bcb76dd51048c8.mockapi.io/Flights",
      tripData
    );
    console.log("response", response);

    router.push(`/`);
  };

  return (
    <div className={styles.main}>
      <Input
        onChange={setDestination}
        value={Destination}
        placeholder="Destination"
      />
      <Input onChange={setDate} value={Date} placeholder="Date" />
      <Input onChange={setDuration} value={Duration} placeholder="Duration" />
      <Input onChange={setImageURL} value={imageURL} placeholder="Image URL" />
      <Input onChange={setPrice} value={Price} placeholder="Price" />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Publish" />
      </div>
    </div>
  );
};
export default TripForm;
