import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Checkout/Banner";
import CheckoutBody from "../components/Checkout/CheckoutBody";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <CheckoutBody />

      <Footer />
    </>
  );
};

export default Checkout;
