import products from "../products";
import ProductItem from "./ProductItem";

import React from "react";

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductItem />
      ))}
    </div>
  );
}

export default ProductList;
