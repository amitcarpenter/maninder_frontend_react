import { useEffect } from "react";
import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import FeaturedPage from "./pages/Featured/FeaturedPage";
import Login from "./components/login/Login";
import Blogcontainer from "./pages/blog/Blogcontainer";
import Singleblogpage from "./pages/blog/Singleblogpage";
import Aboutpage from "./pages/About/Aboutpage";
import Contactpage from "./pages/Contact/Contactpage";
import Testimonialpage from "./pages/Testimonial/Testimonialpage";
import FeaturesDetails from "./pages/Featured/FeaturesDetails";
import BuyersGuide from "./pages/sell/BuyersGuide";
import SellerGuide from "./pages/sell/SellerGuide";
import Register from "./components/login/Register";
import MortgageCalculator from "./pages/MortgageCalculator/MortgageCalculator";
import Video from "./components/HomePageVideo/vidoe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<FeaturedPage />} />
        <Route path="/property/:id" element={<FeaturesDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogcontainer />} />
        <Route path="/singleblog/:id" element={<Singleblogpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about-us" element={<Aboutpage />} />
        <Route path="/testimonial" element={<Testimonialpage />} />
        <Route path="/buyer-guide" element={<BuyersGuide />} />
        <Route path="/seller-guide" element={<SellerGuide />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/mortgage-calculator" element={<Register />} /> */}
        <Route path="/MortgageCalculator" element={<MortgageCalculator />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
