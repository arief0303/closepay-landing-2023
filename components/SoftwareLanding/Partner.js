import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partner = () => {
  return (
    <>
      <div className="partner-area software-partner">
        <div className="container">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-1.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-2.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-3.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-4.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-5.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-6.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/partner-7.png" alt="partner" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
