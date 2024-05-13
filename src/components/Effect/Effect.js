import styles from "./Effect.module.css";
import Clock from "./Clock.jsx";

function Effect() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.technique}>Effect Hook</p>
      <Clock />
    </div>
  );
}

export default Effect;
