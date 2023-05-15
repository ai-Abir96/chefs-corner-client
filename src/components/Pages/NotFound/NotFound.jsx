import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center mt-48 items-center text-7xl text-red-800 font-extrabold">
      <img
        src="/images/notfound.jpg"
        alt=""
        style={{ width: "20%", height: "30%" }}
      />
      <div>404 - NotFound</div>
      <div></div>
      <div>
        <Link to="/">
          <button className="button mt-24">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
