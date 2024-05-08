import React from "react";
import Product from "./Product";
import styles from "./Props.module.css";

function List({ products }) {
  return (
    <div>
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
    </div>
  );
}

export default List;
