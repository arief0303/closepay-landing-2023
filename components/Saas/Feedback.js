import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Feedback = () => {
  return (
    <>
      <section className="feedback-area ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback">
                <div className="client-info">
                  <img src="/images/client1.jpg" alt="client" />
                  <h3>Alit John</h3>
                  <span>CEO of Company</span>
                </div>
                <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <div className="client-info">
                  <img src="/images/client2.jpg" alt="client" />
                  <h3>Oliver Jack</h3>
                  <span>React JS Developer</span>
                </div>
                <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <div className="client-info">
                  <img src="/images/client3.jpg" alt="client" />
                  <h3>Steven Harry</h3>
                  <span>Web Developer</span>
                </div>
                <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <div className="client-info">
                  <img src="/images/client4.jpg" alt="client" />
                  <h3>David Warner</h3>
                  <span>SEO Expert</span>
                </div>
                <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <svg
          className="svg-feedback-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </section>
    </>
  );
};

export default Feedback;
