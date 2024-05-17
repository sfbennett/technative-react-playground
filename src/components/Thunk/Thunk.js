import styles from "./Thunk.module.css";
import React from "react";
import DogApp from "./DogApp";

function Thunk() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.pagetitle}>Thunk-Middleware Redux API Practice</p>
      <DogApp />
    </div>
  );
}

export default Thunk;
