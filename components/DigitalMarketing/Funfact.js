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
                  <i className="icofont-users-alt-5"></i>
                </div>
                <h3>
                  <span className="count">2150</span>
                </h3>
                <p>Active Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-rocket-alt-1"></i>
                </div>
                <h3>
                  <span className="count">86</span>
                </h3>
                <p>Success Rate</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-laptop-alt"></i>
                </div>
                <h3>
                  <span className="count">550</span>
                </h3>
                <p>Projects Done</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-win-trophy"></i>
                </div>
                <h3>
                  <span className="count">35</span>+
                </h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact;
