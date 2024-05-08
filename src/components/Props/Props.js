import styles from "./Props.module.css";
import List from "./List";
import Products from "./Products.json";

function Props() {
  return (
    <div className={styles.wrapper}>
      <p>Props</p>
      <List products={Products} />
    </div>
  );
}

export default Props;
