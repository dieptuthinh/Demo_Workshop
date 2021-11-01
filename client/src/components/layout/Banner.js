import React from "react";
import banner from "../../assets/banner.jpg";
import ProductList from "../products/ProductList";
const Banner = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={banner}
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Banner;
