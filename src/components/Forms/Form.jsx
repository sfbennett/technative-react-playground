import React, { useState } from "react";
import styles from "./Forms.module.css";

function Form() {
  const [text, setText] = useState("");

  // Define handle change function
  // Represent current value of input field

  function handleChange(event) {
    setText(event.target.value);
  }

  // JSX code for UI of form component
  return (
    <form className={styles.form}>
      <p className={styles.heading}>React Form</p>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Insert text here..."
        className={styles.input}
      ></input>
      <p className={styles.text}>Your message will appear below...</p>
      <h2 className={styles.message}>{text}</h2>
    </form>
  );
}

export default Form;
