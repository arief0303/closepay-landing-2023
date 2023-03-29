import React from "react";
import Link from "next/link";

const JoinCard = () => {
  return (
    <>
      <section className="join-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="join-img">
                <img src="/images/mockup2.png" alt="img" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="join-content">
                {/* <span>Start 30 Days Free Trial</span> */}
                <h3>Closepay is
                  fully yours.</h3>
                <p>
                  The existing e-Money is general in purpose, there is no closed loop Fintech & Membership platform for community and institution.
                </p>
                <Link href="#" className="btn btn-primary">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinCard;
