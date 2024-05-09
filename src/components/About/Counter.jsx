import React, { useState } from "react";
import styles from "./About.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount((prevCount) => (prevCount = 0));
  };

  const randomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setCount(randomNum);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.number}>{count}</h1>
      <div className={styles.buttoncontainer}>
        <button onClick={add} className={styles.upbutton}>
          Up
        </button>
        <button onClick={subtract} className={styles.downbutton}>
          Down
        </button>
        <button onClick={reset} className={styles.resetbutton}>
          Reset
        </button>
        <button onClick={randomNumber} className={styles.random}>
          Random
        </button>
      </div>
    </div>
  );
}

export default Counter;
