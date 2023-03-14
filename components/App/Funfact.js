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
                  <i className="icofont-download"></i>
                </div>
                <h3>
                  <span className="count">2</span>B
                </h3>
                <p>Download</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-star"></i>
                </div>
                <h3>
                  <span className="count">5</span>M
                </h3>
                <p>Ratings</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-user-suited"></i>
                </div>
                <h3>
                  <span className="count">500</span>M
                </h3>
                <p>Active Users</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-thumbs-up"></i>
                </div>
                <h3>
                  <span className="count">13</span>K
                </h3>
                <p>Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Funfact;
