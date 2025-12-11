import AOS from "aos"; // <-- default import
import "aos/dist/aos.css";
import React from "react";
import Bunner from "./components/bunner/Bunner";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Subscribe from "./components/subscription/Subscription";
import Testimonials from "./components/testimonial/Testimonial";
import TopProducts from "./components/top products/TopProducts";
import "./index.css";
export default function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Bunner />
      <Subscribe />
      <Testimonials />
    </div>
  );
}
