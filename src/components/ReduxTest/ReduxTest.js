import styles from "./Count.module.css";
import Count from "./Count.jsx";

function ReduxTest() {
  return (
    <div className={styles.wrapper}>
      <p>Redux Test Counter</p>
      <Count />
    </div>
  );
}

export default ReduxTest;
