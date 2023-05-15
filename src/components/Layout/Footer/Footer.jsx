import React from "react";
import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <footer
      style={{ background: "#F6EADE" }}
      className="flex mx-auto px-2 lg:px-40 py-20 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t-4 border-blue-gray-900  text-center md:justify-between"
    >
      <Typography
        color="blue-gray"
        className="font-normal lg:w-1/3 text-center  lg:text-left"
      >
        <p>
          "Thank you for visiting Chef's Corner, where our passion for
          culinary excellence meets exceptional customer service.
        </p>
        <p className=" text-center  lg:text-lefttext-left mt-3">
          &copy; 2023 Chef's Corner
        </p>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
