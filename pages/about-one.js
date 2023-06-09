import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/About/Banner";
import AboutContent from "../components/About/AboutContent";
import Team from "../components/About/Team";
import CtaCard from "../components/About/CtaCard";
import Feedback from "../components/About/Feedback";
import Partner from "../components/About/Partner";
import Platform from "../components/About/Platform";

const AboutOne = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <AboutContent />

      <Team />

      <CtaCard />

      <Feedback />

      <Partner />

      <Platform />

      <Footer />
    </>
  );
};

export default AboutOne;
