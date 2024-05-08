import styles from "./Home.module.css";
import Kermit from "./Kermit.jsx";
import Frogs from "./Frogs.json";

function Home() {
  return (
    <div className={styles.wrapper}>
      <p>Welcome to my React App!</p>
      <div>
        <Kermit frogs={Frogs} />
      </div>
    </div>
  );
}

export default Home;
