import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const GetUpdate = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Congratulations",
      text: `Thank you for being with us!!!\n\nYou will get updates to \n\n ${email}`,
      icon: "success",
      confirmButtonText: "OK",
    });
    console.log(email);
  };

  return (
    <div>
      <div className="lg:mx-24 mb-24">
        <h2 className="text-5xl font-extrabold mt-48 mb-12 text-center">
          Get Updates
        </h2>
        <p className="text-center font-light">
          Stay up-to-date with all the latest news and events from
          Chef's Corner!
          <br />
          Sign up for our newsletter to receive regular updates on our
          new menu items, seasonal specials, and upcoming events.
          <br />
          You'll also be the first to know about exclusive promotions
          and discounts. Don't miss out on the latest happenings at
          our restaurant
          <br />- subscribe today!
        </p>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div>
              <Input
                size="lg"
                type="email"
                name="email"
                label="Email"
                onChange={handleEmailChange}
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetUpdate;
