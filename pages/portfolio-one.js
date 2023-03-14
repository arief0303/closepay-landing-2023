import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Portfolio/Banner";
import ContentOne from "../components/Portfolio/ContentOne";

const PortfolioOne = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <ContentOne />

      <Footer />
    </>
  );
};

export default PortfolioOne;
