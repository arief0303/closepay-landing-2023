import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Blog = () => {
  return (
    <>
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest News</h2>
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
                slidesPerView: 0,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="blog-slides"
          >
            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img1.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 23, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New Business Apps
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img2.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 16, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img3.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 14, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img4.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 06, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img5.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 04, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <Link href="/blog-details" className="post-image">
                  <img src="/images/blog-img3.jpg" alt="blog-image" />
                </Link>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 26, 2019
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
