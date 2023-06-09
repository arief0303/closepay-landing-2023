import React from "react";
import Link from "next/link";

const PricingPlan = () => {
  return (
    <>
      <section className="pricing-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricingTable">
                <div className="pricing-icon">
                  <i className="icofont-globe"></i>
                </div>
                <div className="price-Value">
                  <span className="currency">$</span>15
                </div>
                <span className="month">/Month</span>
                <div className="pricingHeader">
                  <h3 className="title">Personal</h3>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li className="active">Send 5 invoices and quotes</li>
                    <li className="active">2 Clients and Products</li>
                    <li className="active">Invoicing and Payments</li>
                    <li className="active">Enter 5 bills</li>
                    <li className="active">Data Security and Backups</li>
                    <li>Unlimited Staff Accounts</li>
                    <li>Web Booking Widget</li>
                    <li>Monthly Reports and Analytics</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <Link href="/login" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricingTable">
                <div className="pricing-icon">
                  <i className="icofont-globe"></i>
                </div>
                <div className="price-Value">
                  <span className="currency">$</span>39
                </div>
                <span className="month">/Month</span>
                <div className="pricingHeader">
                  <h3 className="title">Business</h3>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li className="active">Send 5 invoices and quotes</li>
                    <li className="active">2 Clients and Products</li>
                    <li className="active">Invoicing and Payments</li>
                    <li className="active">Enter 5 bills</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">Unlimited Staff Accounts</li>
                    <li className="active">Web Booking Widget</li>
                    <li>Monthly Reports and Analytics</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <Link href="/login" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricingTable">
                <div className="pricing-icon">
                  <i className="icofont-globe"></i>
                </div>
                <div className="price-Value">
                  <span className="currency">$</span>99
                </div>
                <span className="month">/Month</span>
                <div className="pricingHeader">
                  <h3 className="title">Enterprise</h3>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li className="active">Send 5 invoices and quotes</li>
                    <li className="active">2 Clients and Products</li>
                    <li className="active">Invoicing and Payments</li>
                    <li className="active">Enter 5 bills</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">Unlimited Staff Accounts</li>
                    <li className="active">Web Booking Widget</li>
                    <li className="active">Monthly Reports and Analytics</li>
                    <li className="active">24/7 Support</li>
                  </ul>
                </div>
                <Link href="/login" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
