import React from "react";
import Link from "next/link";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

class Banner extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    return (
      <>
        <div className="main-banner saas-home">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="saas-image">
                      <img
                        src="/images/mockup.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="mockup"
                      />
                      {/* <img
                        src="/images/saas-shape/arrow.png"
                        className="wow fadeInDown"
                        alt="arrow"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/box1.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="box1"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/boy1.png"
                        className="wow fadeInLeft"
                        data-wow-delay="0.6s"
                        alt="boy1"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/boy2.png"
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="boy2"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/boy3.png"
                        className="wow bounceIn"
                        data-wow-delay="0.6s"
                        alt="boy3"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/digital-screen.png"
                        className="wow fadeInDown"
                        data-wow-delay="0.6s"
                        alt="digital-screen"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/filter1.png"
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="filter1"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/filter2.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="filter2"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/filter3.png"
                        className="wow rotateIn"
                        data-wow-delay="0.6s"
                        alt="filter3"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/girl1.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="girl1"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/girl2.png"
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="girl2"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/monitor.png"
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="monitor"
                      /> */}
                      {/* <img
                        src="/images/saas-shape/main-image.png"
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="main-image.png"
                      /> */}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content pl-4">
                      <h1>Self managed payment ecosystem</h1>
                      <p>
                      The existing e-Money is general, there is no need-based e-Money platform. Build your own e-money ecosystem for your business.
                      </p>

                      <Link href="/contact" className="btn btn-primary">
                        Get Started
                      </Link>

                      <Link
                        href="/about-one"
                        className="video-btn popup-youtube"
                      >
                        About Us
                        <i className="icofont-thin-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="bg-gray shape-1"></div>
          <div className="shape1">
            <img src="/images/shape1.png" alt="img" />
          </div>
          <div className="shape2">
            <img src="/images/shape2.png" alt="img" />
          </div>
          <div className="shape3">
            <img src="/images/shape3.png" alt="img" />
          </div>
          <div className="shape4 rotateme">
            <img src="/images/shape4.png" alt="img" />
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
