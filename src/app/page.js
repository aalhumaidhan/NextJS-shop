import Image from "next/image";
import bakeryImg from "./bakeryimage.png";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-black">
      <h1 className="font-extrabold text-5xl my-6">Bakery and Baked Goods</h1>
      <h2 className="text-xl font-bold italic">
        Where you will gain weight but you're happy
      </h2>
      <Image src={bakeryImg} className="my-20 w-4/6 rounded-3xl"></Image>
    </div>
  );
}
