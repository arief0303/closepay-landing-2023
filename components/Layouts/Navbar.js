import React from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import Link from "next/link";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;

    let layOutCls = "";
    let logo = "/images/logo.png";
    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = "/images/logo2.png";
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    const { router } = this.props;

    return (
      <>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/saas" className="navbar-brand">
                  <img src={logo} alt="logo" />
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ms-auto">
                    <li className="nav-item">
                      <Link
                        href="/saas/"
                        className={`nav-link ${
                          router.pathname === "/" ? "active" : ""
                        }`}
                      >
                        Home
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link
                            href="/saas"
                            className={
                              router.pathname === "/saas" ? "active" : ""
                            }
                          >
                            SaaS Landing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/app"
                            className={
                              router.pathname === "/app" ? "active" : ""
                            }
                          >
                            App Landing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/digital-marketing"
                            className={
                              router.pathname === "/digital-marketing"
                                ? "active"
                                : ""
                            }
                          >
                            Digital Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/product-landing"
                            className={
                              router.pathname === "/product-landing"
                                ? "active"
                                : ""
                            }
                          >
                            Product Landing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/software-landing"
                            className={
                              router.pathname === "/software-landing"
                                ? "active"
                                : ""
                            }
                          >
                            Software Landing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/book-landing"
                            className={
                              router.pathname === "/book-landing"
                                ? "active"
                                : ""
                            }
                          >
                            Book Landing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/agency"
                            className={
                              router.pathname === "/agency" ? "active" : ""
                            }
                          >
                            Startup Agency
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/payment-processing"
                            className={
                              router.pathname === "/payment-processing"
                                ? "active"
                                : ""
                            }
                          >
                            Payment Processing
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="/about-one/" className="nav-link">
                        Pages
                      </a>

                      <ul className="dropdown_menu">
                        <li className="nav-item">
                          <Link
                            href="/about-one"
                            className={`nav-link ${
                              router.pathname === "/about-one" ? "active" : ""
                            }`}
                          >
                            About
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/about-one"
                                className={
                                  router.pathname === "/about-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                About Us 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/about-two"
                                className={
                                  router.pathname === "/about-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                About Us 2
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            href="/features"
                            className={
                              router.pathname === "/features" ? "active" : ""
                            }
                          >
                            Features
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services"
                            className={
                              router.pathname === "/services" ? "active" : ""
                            }
                          >
                            Services
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/gallery"
                            className={
                              router.pathname === "/gallery" ? "active" : ""
                            }
                          >
                            Gallery
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/team-one"
                            className={`nav-link ${
                              router.pathname === "/team-one" ? "active" : ""
                            }`}
                          >
                            Team
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/team-one"
                                className={
                                  router.pathname === "/team-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                Team 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/team-two"
                                className={
                                  router.pathname === "/team-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                Team 2
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/pricing-one"
                            className={`nav-link ${
                              router.pathname === "/pricing-one" ? "active" : ""
                            }`}
                          >
                            Pricing
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/pricing-one"
                                className={
                                  router.pathname === "/pricing-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                Pricing 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/pricing-two"
                                className={
                                  router.pathname === "/pricing-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                Pricing 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/pricing-three"
                                className={
                                  router.pathname === "/pricing-three"
                                    ? "active"
                                    : ""
                                }
                              >
                                Pricing 3
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/portfolio-one"
                            className={`nav-link ${
                              router.pathname === "/portfolio-one"
                                ? "active"
                                : ""
                            }`}
                          >
                            Portfolio
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/portfolio-one"
                                className={
                                  router.pathname === "/portfolio-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                Portfolio 2 Columns
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/portfolio-two"
                                className={
                                  router.pathname === "/portfolio-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                Portfolio 3 Columns
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/portfolio-three"
                                className={
                                  router.pathname === "/portfolio-three"
                                    ? "active"
                                    : ""
                                }
                              >
                                Portfolio 4 Columns Wide
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/project-details"
                                className={
                                  router.pathname === "/project-details"
                                    ? "active"
                                    : ""
                                }
                              >
                                Portfolio Details
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/shop-one"
                            className={`nav-link ${
                              router.pathname === "/shop-one" ? "active" : ""
                            }`}
                          >
                            Shop
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/shop-one"
                                className={
                                  router.pathname === "/shop-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                Shop 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop-two"
                                className={
                                  router.pathname === "/shop-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                Shop 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop-details"
                                className={
                                  router.pathname === "/shop-details"
                                    ? "active"
                                    : ""
                                }
                              >
                                Shop Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/cart"
                                className={
                                  router.pathname === "/cart" ? "active" : ""
                                }
                              >
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/checkout"
                                className={
                                  router.pathname === "/checkout"
                                    ? "active"
                                    : ""
                                }
                              >
                                Checkout
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog-one"
                            className={`nav-link ${
                              router.pathname === "/blog-one" ? "active" : ""
                            }`}
                          >
                            Blog
                          </Link>
                          <ul className="dropdown_menu">
                            <li>
                              <Link
                                href="/blog-one"
                                className={
                                  router.pathname === "/blog-one"
                                    ? "active"
                                    : ""
                                }
                              >
                                Blog 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/blog-two"
                                className={
                                  router.pathname === "/blog-two"
                                    ? "active"
                                    : ""
                                }
                              >
                                Blog 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/blog-details"
                                className={
                                  router.pathname === "/blog-details"
                                    ? "active"
                                    : ""
                                }
                              >
                                Blog Details
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            href="/login"
                            className={
                              router.pathname === "/login" ? "active" : ""
                            }
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/signup"
                            className={
                              router.pathname === "/signup" ? "active" : ""
                            }
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/coming-soon"
                            className={
                              router.pathname === "/coming-soon" ? "active" : ""
                            }
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error"
                            className={
                              router.pathname === "/error" ? "active" : ""
                            }
                          >
                            404 Error
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/faq"
                            className={
                              router.pathname === "/faq" ? "active" : ""
                            }
                          >
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-one"
                        className={`nav-link ${
                          router.pathname === "/portfolio-one" ? "active" : ""
                        }`}
                      >
                        Portfolio
                      </Link>

                      <ul className="dropdown_menu">
                        <li>
                          <Link
                            href="/portfolio-one"
                            className={
                              router.pathname === "/portfolio-one"
                                ? "active"
                                : ""
                            }
                          >
                            Portfolio 2 Columns
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portfolio-two"
                            className={
                              router.pathname === "/portfolio-two"
                                ? "active"
                                : ""
                            }
                          >
                            Portfolio 3 Columns
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portfolio-three"
                            className={
                              router.pathname === "/portfolio-three"
                                ? "active"
                                : ""
                            }
                          >
                            Portfolio 4 Columns Wide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/project-details"
                            className={
                              router.pathname === "/project-details"
                                ? "active"
                                : ""
                            }
                          >
                            Portfolio Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-one/"
                        className={`nav-link ${
                          router.pathname === "/blog-one" ? "active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link
                            href="/blog-one"
                            className={
                              router.pathname === "/blog-one" ? "active" : ""
                            }
                          >
                            Blog 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blog-two"
                            className={
                              router.pathname === "/blog-two" ? "active" : ""
                            }
                          >
                            Blog 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blog-details"
                            className={
                              router.pathname === "/blog-details"
                                ? "active"
                                : ""
                            }
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/shop-one"
                        className={`nav-link ${
                          router.pathname === "/shop-one" ? "active" : ""
                        }`}
                      >
                        Shop
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link
                            href="/shop-one"
                            className={
                              router.pathname === "/shop-one" ? "active" : ""
                            }
                          >
                            Shop 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop-two"
                            className={
                              router.pathname === "/shop-two" ? "active" : ""
                            }
                          >
                            Shop 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop-details"
                            className={
                              router.pathname === "/shop-details"
                                ? "active"
                                : ""
                            }
                          >
                            Shop Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cart"
                            className={
                              router.pathname === "/cart" ? "active" : ""
                            }
                          >
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/checkout"
                            className={
                              router.pathname === "/checkout" ? "active" : ""
                            }
                          >
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={
                          router.pathname === "/contact" ? "active" : ""
                        }
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="ms-auto others-option">
                  <ul className="navbar-nav">
                    <li className="nav-item cart-wrapper">
                      <Link href="/cart">
                        <i className="icofont-shopping-cart cart-icon"></i>
                        <span>{products.length}</span>
                      </Link>
                    </li>

                    <li className="header-search-box">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleSearchForm();
                        }}
                        title="Search"
                      >
                        <i className="icofont-search-2"></i>
                      </Link>
                    </li>

                    <li onClick={this.handleDrawer}>
                      <div className="side-menu">
                        <span className="bar-1"></span>
                        <span className="bar-2"></span>
                        <span className="bar-3"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
