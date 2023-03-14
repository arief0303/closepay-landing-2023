import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Link from "next/link";

const Works = () => {
  return (
    <>
      <section className="project-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Recent Work</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="project-slides"
        >
          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img1.jpg" alt="work" />

                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img2.jpg" alt="work" />
                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img3.jpg" alt="work" />
                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img4.jpg" alt="work" />
                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img5.jpg" alt="work" />
                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-project">
              <div className="project-image">
                <img src="/images/work-img6.jpg" alt="work" />
                <div className="popup-btn">
                  <Link href="/project-details" target="_blank">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <span>Digital</span>
                <h3>
                  <Link href="/project-details">Network Marketing</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Works;
