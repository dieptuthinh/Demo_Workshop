import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Banner from "../components/layout/Banner";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white" variant="light" className="py-3 shadow-sm">
        <div className="container">
          <Navbar.Brand className=" fw-bold fs-4">
            Frontend <span className="text-warning">Developer</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-lg-0">
              <Nav.Link
                className="font-weight-bolder"
                to="/dashboard"
                as={Link}
              >
                Home
              </Nav.Link>
              <Nav.Link className="font-weight-bolder" to="/products" as={Link}>
                Products
              </Nav.Link>
              <Nav.Link className="font-weight-bolder" to="/about" as={Link}>
                About
              </Nav.Link>
            </Nav>

            <Nav className="buttons">
              <Link
                variant="white"
                className="btn btn-warning font-weight-bolder text-white px-3"
                to="/login"
              >
                <i className="fa fa-sign-in me-1"></i>
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
