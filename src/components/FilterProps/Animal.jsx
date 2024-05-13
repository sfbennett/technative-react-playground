import styles from "./FilterProps.module.css";

function Animal({ id, title, description, image }) {
  return (
    <div className={styles.animaldiv}>
      <img src={`animaljpg/${image}`} className={styles.animalimg} />
      <p>{title}</p>
    </div>
  );
}

export default Animal;