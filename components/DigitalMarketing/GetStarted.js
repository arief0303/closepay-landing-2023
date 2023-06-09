import React from "react";

const GetStarted = () => {
  return (
    <>
      <section className="get-started ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Get Started Free</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="get-started-form">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <p>
                Or use your{" "}
                <a href="https://www.facebook.com/" target="_blank">
                  Facebook Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
