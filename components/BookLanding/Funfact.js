import React from "react";

const Funfact = () => {
  return (
    <>
      <section className="app-funfacts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-book-alt"></i>
                </div>
                <h3>
                  <span className="count">5</span>M
                </h3>
                <p>Copies Sold</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-coffee-alt"></i>
                </div>
                <h3>
                  <span className="count">1</span>M
                </h3>
                <p>Cup Of Coffe</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-book-mark"></i>
                </div>
                <h3>
                  <span className="count">1</span>M
                </h3>
                <p>Copies Released</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-ui-user"></i>
                </div>
                <h3>
                  <span className="count">50</span>K
                </h3>
                <p>Happy Readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact;
