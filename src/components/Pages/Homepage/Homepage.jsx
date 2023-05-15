import React from "react";
import Chef from "./Chefs/Chef";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Foods from "./Foods/Foods";
import GetUpdate from "./GetUpdated/GetUpdate";

const Homepage = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Banner />
      <h1 className="text-5xl font-extrabold mt-32 mb-28 text-center">
        Meet Our Chef's
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-y-20 lg:px-40 lg:mb-24">
        {chefData.map((cd) => (
          <Chef key={cd.id} cd={cd}></Chef>
        ))}
      </div>
      <Foods></Foods>
      <GetUpdate></GetUpdate>
    </div>
  );
};

export default Homepage;
