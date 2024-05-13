import React, { useState, useEffect } from "react";
import styles from "./Effect.module.css";

// Define functional Clock component:
function Clock() {
  const [time, setTime] = useState(new Date());

  // UseEffect hook is called when component mounts:
  useEffect(() => {
    // Update the clock every second:
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // UI for the Clock component to render to the screen:
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Clock</h1>
      <div className={styles.clockcontainer}>
        <h2 className={styles.time}>{time.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
}

export default Clock;
