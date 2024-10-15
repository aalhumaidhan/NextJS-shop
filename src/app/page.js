import Image from "next/image";
import bakeryImg from "./bakeryimage.png";

import products from "./products";
import ProductList from "./components/ProductList";

export default function Home() {
  const productList = products.map((product) => (
    <div className="">
      <Image
        src={product.image}
        height={150}
        className="my-2 rounded-xl"
      ></Image>
      <h3 className="text-lg font-bold text-center">{product.name}</h3>
      <h4 className="text-sm font-bold text-center">{product.price}</h4>
    </div>
  ));

  return (
    <div className="flex items-center flex-col text-black">
      <h1 className="font-extrabold text-5xl my-6">Bakery and Baked Goods</h1>
      <h2 className="text-xl font-bold italic">
        Where you will gain weight but you're happy
      </h2>
      <Image src={bakeryImg} className="my-20 rounded-3xl"></Image>
      <div className="flex flex-row flex-wrap justify-between gap-10">
        {/* {productList} */}
        <ProductList />
        {/* <div className="">
          <Image
            src={mascarpone}
            height={150}
            className="my-2 rounded-xl"
          ></Image>
          <h3 className="text-lg font-bold text-center">
            Mascarpone Croissant
          </h3>
          <h4 className="text-sm font-bold text-center">1.750 KD</h4>
        </div>
        <div className="">
          <Image
            src={cinnamon}
            height={150}
            className="my-2  rounded-xl "
          ></Image>
          <h3 className="text-lg font-bold text-center">Cinnamon Roll</h3>
          <h4 className="text-sm font-bold text-center">1.500 KD</h4>
        </div>
        <div className="">
          <Image
            src={chocolate}
            height={150}
            className="my-2  rounded-xl "
          ></Image>
          <h3 className="text-lg font-bold text-center">Chocolate Cruffin</h3>
          <h4 className="text-sm font-bold text-center">2.000 KD</h4>
        </div> */}
      </div>
    </div>
  );
}
