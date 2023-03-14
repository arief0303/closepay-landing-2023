import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Screenshot = () => {
  return (
    <>
      <section className="screenshot-area page-from-book ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Pages From Book</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
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
            modules={[Navigation, Autoplay]}
            className="screenshot-slides"
          >
            <SwiperSlide>
              <img src="/images/page1.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page2.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page3.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page4.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page5.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page6.jpg" alt="screenshot" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/page7.jpg" alt="screenshot" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Screenshot;
