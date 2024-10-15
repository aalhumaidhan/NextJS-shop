import products from "../products";
import ProductItem from "./ProductItem";

import React from "react";

function ProductList() {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-10">
      {products.map((product) => (
        <ProductItem
          name={product.name}
          image={product.image}
          price={product.price}
          key={product.name}
        />
      ))}
    </div>
  );
}

export default ProductList;
