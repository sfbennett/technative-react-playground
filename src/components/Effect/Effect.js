import styles from "./Effect.module.css";
import Clock from "./Clock.jsx";

function Effect() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.technique}>React Clock using the useEffect Hook</p>
      <Clock />
    </div>
  );
}

export default Effect;
