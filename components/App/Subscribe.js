import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Connect With Our Community</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <form className="newsletter-form">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
              name="EMAIL"
              required={true}
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Subscribe;
