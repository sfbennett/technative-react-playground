import React, { useState } from "react";
import styles from "./FilterProps.module.css";

function SearchInput({ input, setInput }) {
  // Define search input function
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className={styles.input}>
      <h2>Find the animal you're looking for</h2>
      <input
        type="text"
        placeholder="Search animal..."
        value={input}
        onChange={handleChange}
        className={styles.searchbar}
      ></input>
    </div>
  );
}

export default SearchInput;
