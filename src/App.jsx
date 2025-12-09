import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import "./index.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}
