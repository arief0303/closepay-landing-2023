import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Pricing/Banner";
import PricingPlan from "../components/Pricing/PricingPlan";

const PricingOne = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <PricingPlan />

      <Footer />
    </>
  );
};

export default PricingOne;
