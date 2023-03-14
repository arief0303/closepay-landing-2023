import React from "react";
import Link from "next/link";

const Overview = () => {
  return (
    <>
      <section className="overview-section ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>More to Discover</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src="/images/overview-1.png" alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-power"></i>
                </div>
                <h3>Getting started page</h3>
                <p>
                  Plan by the day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project to a person's workload.
                </p>

                <ul>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </ul>
                <Link href="/project-details" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-anchor"></i>
                </div>
                <h3>Outdated comments toggling</h3>
                <p>
                  Plan by the day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project to a person's workload.
                </p>

                <ul>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </ul>
                <Link href="/project-details" className="btn btn-primary">
                  Read More
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 app-fetured-item">
                <div className="app-item item-one">
                  <i className="icofont-wink-smile"></i>
                  <h6>Community</h6>
                </div>

                <div className="app-item item-two">
                  <i className="icofont-ebook"></i>
                  <h6>Honest pricing</h6>
                </div>

                <div className="app-item item-three">
                  <i className="icofont-wink-smile"></i>
                  <h6>Management</h6>
                </div>

                <div className="app-item item-four">
                  <i className="icofont-stock-mobile"></i>
                  <h6>Mobile Design</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src="/images/overview-3.png" alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-users-social"></i>
                </div>
                <h3>Code review illustrations</h3>
                <p>
                  Plan by the day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project to a person's workload.
                </p>

                <ul>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </ul>
                <Link href="/project-details" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-ui-messaging"></i>
                </div>
                <h3>We provide professional staff</h3>
                <p>
                  Plan by the day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project to a person's workload.
                </p>

                <ul>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </ul>
                <Link href="/project-details" className="btn btn-primary">
                  Read More
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                <img src="/images/overview-4.png" alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src="/images/shape7.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>
        <div className="shape10">
          <img src="/images/shape10.svg" alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src="/images/shape11.svg" alt="shape" />
        </div>
      </section>
    </>
  );
};
export default Overview;
