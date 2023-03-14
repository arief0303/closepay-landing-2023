import React from "react";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Gallery/Banner";
import GalleryContent from "../components/Gallery/GalleryContent";

const Gallery = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <GalleryContent />

      <Footer />
    </>
  );
};

export default Gallery;
