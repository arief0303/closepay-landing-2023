import React from "react";

const GalleryContent = () => {
  return (
    <>
      <section className="gallery-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>User Gallery</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery1.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery2.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery3.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery4.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery5.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery6.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery7.jpg" alt="gallery" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-image">
              <img src="/images/gallery8.jpg" alt="gallery" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryContent;
