import React from "react";
import Image from "next/image";
import products from "../products";

function ProductItem() {
  return (
    <div className="">
      <Image
        src={products[0].image}
        height={150}
        className="my-2 rounded-xl"
      ></Image>
      <h3 className="text-lg font-bold text-center">{products[0].name}</h3>
      <h4 className="text-sm font-bold text-center">{products[0].price}</h4>
    </div>
  );
}

export default ProductItem;
