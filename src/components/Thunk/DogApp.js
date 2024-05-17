import styles from "./Thunk.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomDogImage, selectDogImage } from "./dogsSlice";

function DogApp() {
  const dispatch = useDispatch();
  const dogImage = useSelector(selectDogImage);

  const handleFetchNewImage = () => {
    dispatch(fetchRandomDogImage());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Fetch a Dog</h1>
      <div className={styles.dogcontainer}>
        <img
          src={dogImage}
          alt="random dog image"
          className={styles.dogimage}
        />
        <button
          onClick={() => handleFetchNewImage()}
          className={styles.fetchbtn}
        >
          Fetch
        </button>
      </div>
    </div>
  );
}

export default DogApp;
