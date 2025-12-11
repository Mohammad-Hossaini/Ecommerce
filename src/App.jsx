import AOS from "aos"; // <-- default import
import "aos/dist/aos.css";
import React from "react";
import Bunner from "./components/bunner/Bunner";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Popup from "./components/popup/Popup";
import Products from "./components/products/Products";
import Subscribe from "./components/subscription/Subscription";
import Testimonials from "./components/testimonial/Testimonial";
import TopProducts from "./components/top products/TopProducts";
import "./index.css";
export default function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
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
<Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Bunner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}
