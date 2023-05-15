import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./navbar.css";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";

const MyNavbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleError = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png";
  };
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogOut = () => {
    if (loading) {
      return (
        <div
          className="flex justify-center items-center w-full"
          style={{ background: "#F6EADE", height: "70vh" }}
        >
          <ReactLoading type="balls" color="red" />
        </div>
      );
    }
    logout()
      .then(() => {
        Swal.fire({
          text: `You Have Successfully Logged Out`,
          icon: "warning",
          timer: 1000,
          timerProgressBar: true,
          didClose: () => {
            return navigate("/login");
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <div>
          <NavLink
            activeclassname="active"
            to="/"
            className="flex items-center text-xl text-black"
          >
            Home
          </NavLink>
        </div>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <div>
          <NavLink
            activeclassname="active"
            to="/blogs"
            className="flex items-center text-xl text-black"
          >
            Blogs
          </NavLink>
        </div>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-full rounded-none border-none shadow-none nav-banner py-2 px-4 lg:px-8 lg:py-8">
      <div className="mx-auto lg:px-32 flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span className="text-4xl font-bold text-blue-gray-500 font-title">
            Chef's Corner
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="flex">
          {user && (
            <Tooltip content={user.displayName}>
              <img
                src={user.photoURL}
                className=" rounded-full lg:mr-10"
                style={{ width: 50, height: 50 }}
                onError={handleError}
                alt=""
              />
            </Tooltip>
          )}
          {user ? (
            <Button
              size="sm"
              className="hidden lg:inline-block button"
              onClick={handleLogOut}
            >
              <span>Log Out</span>
            </Button>
          ) : (
            <NavLink activeclassname="active-button" to="/login">
              <Button className="hidden lg:inline-block text-lg button">
                <span>Log In</span>
              </Button>
            </NavLink>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col">
            {user ? (
              <Button
                variant="gradient"
                size="sm"
                fullWidth
                className="button"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <NavLink activeclassname="active-button" to="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  fullWidth
                  className="button"
                >
                  <span>Log In</span>
                </Button>
              </NavLink>
            )}
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default MyNavbar;
