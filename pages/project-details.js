import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Project/Banner";
import DetailsContent from "../components/Project/DetailsContent";

const ProjectDetails = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <DetailsContent />

      <Footer />
    </>
  );
};

export default ProjectDetails;
