import React, { useState } from "react";
import styles from "./Home.module.css";

function Kermit({ frogs }) {
  const [currentFrogIndex, setCurrentFrogIndex] = useState(0);

  const nextFrog = () => {
    setCurrentFrogIndex((prevFrog) =>
      prevFrog === frogs.length - 1 ? 0 : prevFrog + 1
    );
  };

  const previousFrog = () => {
    setCurrentFrogIndex((prevFrog) =>
      prevFrog === 0 ? frogs.length - 1 : prevFrog - 1
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={frogs[currentFrogIndex].image}
        className={styles.frogimage}
        alt={frogs[currentFrogIndex].name}
      />
      <div className={styles.buttoncontainer}>
        <button onClick={previousFrog} className={styles.previous}>
          Previous
        </button>
        <button className={styles.button}>Ribbet</button>
        <button onClick={nextFrog} className={styles.next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Kermit;
