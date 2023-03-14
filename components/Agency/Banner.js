import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Banner = () => {

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={ toggler }
        sources={ [
        'https://www.youtube.com/embed/bk7McNUjWgw'
        ] }
      />

      <Swiper
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="home-slides startup-home"
      >
        <SwiperSlide>
          <div className="main-banner startup-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="hero-content">
                        <h1>It's Time To Create Your Own Business Scheme</h1>
                        <p>
                          Our passion to work hard and deliver excellent
                          results. It could solve the needs of your customers
                          and develop innovation.
                        </p>

                        <Link href="#" className="btn btn-primary">
                          Get Started
                        </Link>

                        <Link 
                          href="#" 
                          className="video-btn popup-youtube"
                          onClick={ () => setToggler(!toggler) }
                        >
                          Watch Video
                          <i className="icofont-play-alt-3"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="startup-image">
                        <img
                          src="/images/startup-shape/board.png"
                          alt="board"
                        />
                        <img
                          src="/images/startup-shape/chart1.png"
                          alt="chart1"
                        />
                        <img
                          src="/images/startup-shape/chart2.png"
                          alt="chart2"
                        />
                        <img
                          src="/images/startup-shape/check-mark.png"
                          alt="check-mark"
                        />
                        <img
                          src="/images/startup-shape/girl1.png"
                          alt="girl1"
                        />
                        <img
                          src="/images/startup-shape/girl2.png"
                          alt="girl2"
                        />
                        <img src="/images/startup-shape/line.png" alt="line" />
                        <img src="/images/startup-shape/man.png" alt="man" />
                        <img
                          src="/images/startup-shape/progress.png"
                          alt="progress"
                        />
                        <img
                          src="/images/startup-shape/table.png"
                          alt="table"
                        />
                        <img
                          src="/images/startup-shape/main-image.png"
                          alt="main-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* shape Images */}
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
            <div className="shape6">
              <img src="/images/shape6.png" alt="img" />
            </div>
            <div className="shape8 rotateme">
              <img src="/images/shape8.svg" alt="shape" />
            </div>
            <div className="shape9">
              <img src="/images/shape9.svg" alt="shape" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner startup-bg2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="hero-content">
                        <h1>It's Time To Create Your Own Business Scheme</h1>
                        <p>
                          Our passion to work hard and deliver excellent
                          results. It could solve the needs of your customers
                          and develop innovation.
                        </p>

                        <Link href="#" className="btn btn-primary">
                          Get Started
                        </Link>
                        <Link 
                          href="#" 
                          className="video-btn popup-youtube"
                          onClick={ () => setToggler(!toggler) }
                        >
                          Watch Video
                          <i className="icofont-play-alt-3"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="startup-image">
                        <img
                          src="/images/startup-shape/board.png"
                          alt="board"
                        />
                        <img
                          src="/images/startup-shape/chart1.png"
                          alt="chart1"
                        />
                        <img
                          src="/images/startup-shape/chart2.png"
                          alt="chart2"
                        />
                        <img
                          src="/images/startup-shape/check-mark.png"
                          alt="check-mark"
                        />
                        <img
                          src="/images/startup-shape/girl1.png"
                          alt="girl1"
                        />
                        <img
                          src="/images/startup-shape/girl2.png"
                          alt="girl2"
                        />
                        <img src="/images/startup-shape/line.png" alt="line" />
                        <img src="/images/startup-shape/man.png" alt="man" />
                        <img
                          src="/images/startup-shape/progress.png"
                          alt="progress"
                        />
                        <img
                          src="/images/startup-shape/table.png"
                          alt="table"
                        />
                        <img
                          src="/images/startup-shape/main-image.png"
                          alt="main-image"
                        />
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
            <div className="shape6">
              <img src="/images/shape6.png" alt="img" />
            </div>
            <div className="shape8 rotateme">
              <img src="/images/shape8.svg" alt="shape" />
            </div>
            <div className="shape9">
              <img src="/images/shape9.svg" alt="shape" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner startup-bg3">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="hero-content">
                        <h1>It's Time To Create Your Own Business Scheme</h1>
                        <p>
                          Our passion to work hard and deliver excellent
                          results. It could solve the needs of your customers
                          and develop innovation.
                        </p>

                        <Link href="#" className="btn btn-primary">
                          Get Started
                        </Link>
                        <Link 
                          href="#" 
                          className="video-btn popup-youtube"
                          onClick={ () => setToggler(!toggler) }
                        >
                          Watch Video
                          <i className="icofont-play-alt-3"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="startup-image">
                        <img
                          src="/images/startup-shape/board.png"
                          alt="board"
                        />
                        <img
                          src="/images/startup-shape/chart1.png"
                          alt="chart1"
                        />
                        <img
                          src="/images/startup-shape/chart2.png"
                          alt="chart2"
                        />
                        <img
                          src="/images/startup-shape/check-mark.png"
                          alt="check-mark"
                        />
                        <img
                          src="/images/startup-shape/girl1.png"
                          alt="girl1"
                        />
                        <img
                          src="/images/startup-shape/girl2.png"
                          alt="girl2"
                        />
                        <img src="/images/startup-shape/line.png" alt="line" />
                        <img src="/images/startup-shape/man.png" alt="man" />
                        <img
                          src="/images/startup-shape/progress.png"
                          alt="progress"
                        />
                        <img
                          src="/images/startup-shape/table.png"
                          alt="table"
                        />
                        <img
                          src="/images/startup-shape/main-image.png"
                          alt="main-image"
                        />
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
            <div className="shape6">
              <img src="/images/shape6.png" alt="img" />
            </div>
            <div className="shape8 rotateme">
              <img src="/images/shape8.svg" alt="shape" />
            </div>
            <div className="shape9">
              <img src="/images/shape9.svg" alt="shape" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
