import React, { Component } from "react";
import Link from "next/link";

class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className="modal right fade show"
          style={{
            display: "block",
            paddingRight: "16px",
          }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2 className="modal-title" id="myModalLabel2">
                  <Link href="/">
                    <img src="/images/logo.png" alt="logo" />
                  </Link>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                    <li>
                      <Link href="/signup">Register</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="#">Logout</Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>admin@mojosa.com</span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>+123 456 7890</span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
                    <li>
                      <Link href="#" target="_blank">
                        <i className="icofont-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <i className="icofont-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <i className="icofont-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
