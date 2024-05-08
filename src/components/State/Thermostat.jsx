import React, { useState } from "react";
import styles from "./State.module.css";

function Thermostat() {
  // Using useState hook to manage temperature state
  const [temperature, setTemperature] = useState(20); // Initial temperature set to 20 degrees

  // Function to adjust temperature
  const adjustTemperature = (amount) => {
    setTemperature((prevTemperature) => prevTemperature + amount); // Adjusting temperature by amount
  };

  return (
    <div className={styles.thermocontainer}>
      <h2>Thermostat</h2>
      <p>Current Temperature: {temperature} °C</p>
      <button
        onClick={() => adjustTemperature(1)}
        className={styles.buttonIncrease}
      >
        Increase
      </button>
      <button
        onClick={() => adjustTemperature(-1)}
        className={styles.buttonDecrease}
      >
        Decrease
      </button>
    </div>
  );
}

export default Thermostat;
