import styles from "./FilterProps.module.css";

function ShowMoreButton({ increasePageSize }) {
  return (
    <>
      <button onClick={increasePageSize} className={styles.morebutton}>
        Show more
      </button>
    </>
  );
}

export default ShowMoreButton;
