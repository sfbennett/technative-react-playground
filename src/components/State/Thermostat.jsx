import React, { useState } from "react";

function Thermostat() {
  // Using useState hook to manage temperature state
  const [temperature, setTemperature] = useState(20); // Initial temperature set to 20 degrees

  // Function to adjust temperature
  const adjustTemperature = (amount) => {
    setTemperature(temperature + amount); // Adjusting temperature by amount
  };

  return (
    <div>
      <h2>Thermostat</h2>
      <p>Current Temperature: {temperature} °C</p>
      <button onClick={() => adjustTemperature(1)}>Increase</button>
      <button onClick={() => adjustTemperature(-1)}>Decrease</button>
    </div>
  );
}

export default Thermostat;
