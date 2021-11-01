import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 container">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fa fa-github"></i>
          </Link>
        </div>
      </section>

      <section className="border-top">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  React
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Vue
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Laravel
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset td-none">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset td-none">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fa fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fa fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 footer-bg-color">
        © 2021 Copyright:
        <Link
          className="text-reset fw-bold td-none"
          to="https://WebDeveloper.com/"
        >
          Webdeveloper.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
