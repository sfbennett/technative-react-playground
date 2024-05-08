import React, { useState, useEffect } from "react";
import Product from "./Product";

function List({ products }) {
  return (
    <div>
      <h1>Fruit Products</h1>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            color={product.color}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
