import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Food from "./Food";

const Foods = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("https://chefs-corner-server-ai-abir96.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#F6EADE" }} className="lg:px-40 py-24">
      <h2 className="text-5xl font-extrabold  mb-12 text-center">
        Japanese Food: A Culinary Journey
      </h2>
      <p className="text-center text-2xl mb-28">
        Discover the rich variety and history of Japanese cuisine,
        from sushi and ramen to traditional home-cooked dishes.
      </p>

      <Slider {...settings}>
        {foodData.map((fd) => (
          <Food key={fd.id} fd={fd}></Food>
        ))}
      </Slider>
    </div>
  );
};

export default Foods;
