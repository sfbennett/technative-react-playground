import React, { useState, useEffect } from "react";
import Product from "./Product";
import styles from "./Props.module.css";

function List({ products }) {
  return (
    <>
      <h1 className={styles.heading}>Fruit Props</h1>
      <div className={styles.fruitcontainer}>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            color={product.color}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default List;
