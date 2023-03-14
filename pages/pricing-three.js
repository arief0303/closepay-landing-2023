import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Pricing/Banner";
import PricingPlanThree from "../components/Pricing/PricingPlanThree";

const PricingThree = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <PricingPlanThree />

      <Footer />
    </>
  );
};

export default PricingThree;
