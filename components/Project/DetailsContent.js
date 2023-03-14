import React from "react";
import Link from "next/link";

const DetailsContent = () => {
  return (
    <>
      <section className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <img src="/images/work-img1.jpg" alt="work" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <img src="/images/work-img2.jpg" alt="work" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <img src="/images/work-img4.jpg" alt="work" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <img src="/images/work-img3.jpg" alt="work" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>Network Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
                  sed diam no nu m nibhie eui smod. Facil isis atve eros et
                  accumsan etiu sto odi dignis sim qui blandit praesen lup ta de
                  er. At molestiae appellantur pro. Vis wisi oportere per ic ula
                  ad, ei latine prop riae na, mea cu purto debitis. Primis nost
                  rud no eos, no impedit dissenti as mea, ea vide labor amus
                  neglegentur vix. Ancillae intellegat vix et. Sit causae
                  laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet
                  enda qui, munere oblique theo phrastu ea vix. Ne nec modus
                  civibus modera tius, sit ei lorem doctus. Ne docen di verterem
                  reformidans eos. Cu altera expetenda qui, munere oblique
                  theophr astus ea vix modus civiu mod eratius.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
                  sed diam no nu m nibhie eui smod. Facil isis atve eros et
                  accumsan etiu sto odi dignis sim qui blandit praesen lup ta de
                  er. At molestiae appellantur pro. Vis wisi oportere per ic ula
                  ad, ei latine prop riae na, mea cu purto debitis. Primis nost
                  rud no eos, no impedit dissenti as mea, ea vide labor amus
                  neglegentur vix. Ancillae intellegat vix et. Sit causae
                  laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet
                  enda qui, munere oblique theo phrastu ea vix. Ne nec modus
                  civibus modera tius, sit ei lorem doctus. Ne docen di verterem
                  reformidans eos. Cu altera expetenda qui, munere oblique
                  theophr astus ea vix modus civiu mod eratius.
                </p>

                <div className="project-details-information">
                  <div className="single-info-box">
                    <h4>Happy Client</h4>
                    <p>John Doe</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <p>Portfolio, Persoanl</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <p>February 28, 2019</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Share</h4>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="single-info-box">
                    <Link href="#" className="btn btn-primary">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsContent;
