import React, { useState, useEffect } from "react";
import styles from "./Props.module.css";

function Product({ name, color, image }) {
  return (
    <div className={styles.fruitdiv}>
      <h2>{name}</h2>
      <p>Colour: {color}</p>
      <img src={image} className={styles.fruitImg} />
    </div>
  );
}

export default Product;
