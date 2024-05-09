import React, { useState } from "react";
import styles from "./Home.module.css";

function Kermit({ frogs }) {
  const [currentFrogIndex, setCurrentFrogIndex] = useState(0);

  // Define next frog function with ternary operator
  const nextFrog = () => {
    setCurrentFrogIndex((prevFrog) =>
      prevFrog === frogs.length - 1 ? 0 : prevFrog + 1
    );
  };

  // Define previous frog function with ternary operator
  const previousFrog = () => {
    setCurrentFrogIndex((prevFrog) =>
      prevFrog === 0 ? frogs.length - 1 : prevFrog - 1
    );
  };

  // Define ribbit function
  function ribbit() {
    const audio = new Audio("sounds/ribbet.mp3");
    audio.play();
  }

  // JSX code for UI of Kermit component
  return (
    <div className={styles.container}>
      <img
        src={frogs[currentFrogIndex].image}
        className={styles.frogimage}
        alt={frogs[currentFrogIndex].name}
      />
      <figcaption className={styles.desc}>
        {frogs[currentFrogIndex].description}
      </figcaption>
      <div className={styles.buttoncontainer}>
        <button onClick={previousFrog} className={styles.previous}>
          Previous
        </button>
        <button onClick={ribbit} className={styles.button}>
          Ribbit
        </button>
        <button onClick={nextFrog} className={styles.next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Kermit;
