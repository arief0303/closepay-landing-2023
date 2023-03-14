import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Cart/Banner";
import CartBody from "../components/Cart/CartBody";

const Cart = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <CartBody />

      <Footer />
    </>
  );
};

export default Cart;
