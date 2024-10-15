import ProductList from "./components/ProductList";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-black">
      <Header />
      <ProductList />
    </div>
  );
}
