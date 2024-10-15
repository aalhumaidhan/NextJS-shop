import React from "react";
import Image from "next/image";

function ProductItem({ image, name, price }) {
  return (
    <div className="">
      <Image src={image} height={150} className="my-2 rounded-xl"></Image>
      <h3 className="text-lg font-bold text-center">{name}</h3>
      <h4 className="text-sm font-bold text-center">{price}</h4>
    </div>
  );
}

export default ProductItem;
