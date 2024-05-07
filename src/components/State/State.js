import styles from "./State.module.css";
import Thermostat from "./Thermostat";
import Library from "./Library";

function State() {
  return (
    <div className={styles.wrapper}>
      <p>State</p>
      <Thermostat />
      <Library />
    </div>
  );
}

export default State;
