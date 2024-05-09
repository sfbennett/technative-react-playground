import styles from "./About.module.css";
import Counter from "./Counter.jsx";

function About() {
  return (
    <div className={styles.wrapper}>
      <p>A place for me to test out React!</p>
      <Counter />
    </div>
  );
}

export default About;
