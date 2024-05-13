import styles from "./FilterProps.module.css";

function ShowLessButton({ decreasePageSize }) {
  return (
    <>
      <button onClick={decreasePageSize} className={styles.lessbutton}>
        Show less
      </button>
    </>
  );
}

export default ShowLessButton;
