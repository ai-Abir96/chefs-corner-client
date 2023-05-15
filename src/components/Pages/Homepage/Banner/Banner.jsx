import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner pt-24 lg:pt-0 px-4 lg:flex lg:px-40 justify-between items-center">
      <div>
        <div>
          <h1 className="text-5xl lg:text-8xl font-extrabold font-banner_title gradient-text">
            Welcome to <br />
            Chefs Corner
          </h1>
          <p className="my-8 text-xl pr-40 lg:pr-0 lg:text-2xl">
            "Discover The Best of Japanese Cuisine with Chef's
            Corner's
            <br />
            Featured Japanese Chefs and Their Exquisite Creations"
          </p>
          <Link to="#">
            <button className="gradient-button font-bold mb-8 lg:mb-0">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          className=" rounded-3xl"
          style={{ width: 800 }}
          src="/images/cover-photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
