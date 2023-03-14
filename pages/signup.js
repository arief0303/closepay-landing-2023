import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Signup/Banner";
import LoginBody from "../components/Signup/SignupBody";

const Signup = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <LoginBody />

      <Footer />
    </>
  );
};

export default Signup;
