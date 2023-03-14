import React from "react";
import Link from "next/link";

const CtaCard = () => {
  return (
    <>
      <div className="cta-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-7">
              <p>Want a bite? You're in the right place!</p>
            </div>

            <div className="col-lg-5 col-md-5 text-right">
              <Link href="#" className="btn btn-primary">
                Take a Test Drive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaCard;
