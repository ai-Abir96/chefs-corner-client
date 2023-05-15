import React, { useContext, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  Link,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";

const Register = () => {
  const { createUser, updateUserData, loading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();

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

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setError(
        `Please Enter a valid Email. \n Example: Abc.123@xyz.com, Abc_123@xyz.com, Abc123@xyz.com`
      );
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setError(
        `Password must contain minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:`
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(createdUser, name, photo);
        setError("");
        event.target.reset();
      })
      .then(() => {
        Swal.fire({
          title: "Congratulations",
          text: `You Have Successfully Registered \n\n You will be redirected to the login page`,
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          didClose: () => {
            navigate("/");
          },
        });
      })
      .catch((error) => {
        setError(error.message);
        return;
      });
  };
  return (
    <div
      className="  flex justify-center pt-24 pb-56"
      style={{ background: "#F6EADE" }}
    >
      <Card className="flex items-center text-center lg:mx-auto w-3/4 lg:w-3/5 lg:px-10 py-24">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" type="name" name="name" label="Name" />
            <Input
              size="lg"
              type="name"
              name="photo_url"
              label="Photo Url"
            />
            <Input
              size="lg"
              type="email"
              name="email"
              label="Email"
              required
            />
            <Input
              type="password"
              name="password"
              size="lg"
              label="Password"
              required
            />
          </div>
          <p className=" text-red-700 my-4">{error}</p>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
