import React from "react";
import Link from "next/link";

const Funfact = () => {
  return (
    <>
      <section className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-users"></i>
                </div>
                <h3>
                  <span className="count">976+</span>
                </h3>
                <p>Satisfied Client</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-thumbs-up"></i>
                </div>
                <h3>
                  <span className="count">202+</span>
                </h3>
                <p>Appreciation</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-diamond"></i>
                </div>
                <h3>
                  <span className="count">524k</span>
                </h3>
                <p>Response time</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-wrench"></i>
                </div>
                <h3>
                  <span className="count">512k</span>
                </h3>
                <p>Data Entry</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fun-facts-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-image">
                  <img src="/images/features-img2.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-inner-content">
                  <h3>Build Beautiful Interface Into Your Application</h3>
                  <p>
                    Funding freemium technology focuses on equity bootstrapping
                    the username niche market. Seed round agile development
                    growth hacking return investment alpha. Investor advisor
                    marketing pitch gen scrum project.
                  </p>
                  <p>
                    Responsive web design. Agile development innovator term
                    sheet is users interface pitch scrum project research &
                    development.
                  </p>
                  <ul>
                    <li>Unlimited Video Call</li>
                    <li>Add Favourite contact</li>
                    <li>Camera Filter</li>
                  </ul>
                  <Link href="#" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact;
