import React, { useState } from "react";
import styles from "./Forms.module.css";

function Form() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <form className={styles.form}>
      <p className={styles.heading}>React Form</p>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Insert text here..."
        className={styles.input}
      ></input>
      <h2 className={styles.message}>{text}</h2>
    </form>
  );
}

export default Form;
