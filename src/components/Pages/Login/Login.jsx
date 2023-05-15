import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";

const Login = () => {
  const { signUser, loading, logInWithGoogle, logInWithGit } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((user) => {
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitLogIn = () => {
    logInWithGit()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const LoginHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
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

    signUser(email, password)
      .then((currentUser) => {
        Swal.fire({
          title: "Congratulations",
          text: `You Have Successfully Logged In`,
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div
      className="lg:mx-auto  flex justify-center pt-24 pb-56"
      style={{ background: "#F6EADE" }}
    >
      <Card className="flex items-center  lg:mx-auto w-3/4 lg:w-3/5 lg:px-10 py-24">
        <Typography variant="h4" color="blue-gray">
          Welcome back
        </Typography>
        <div className="lg:flex justify-between items-center pb-5 border-b-4 border-blue-gray-600">
          <Button
            onClick={handleGoogleLogIn}
            className="mt-6 mr-3 flex justify-center items-center"
            fullWidth
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className=" text-2xl mb-2"
            />
            <p>Log In with Google</p>
          </Button>
          <Button
            onClick={handleGitLogIn}
            className="mt-6 flex justify-center items-center"
            fullWidth
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl mr-4"
            />
            <p>
              Log In with
              <br />
              GitHub
            </p>
          </Button>
        </div>
        <p className="text-center  mt-3 mb-3 text-3xl font-bold">
          or
          <br />
          Log In With
        </p>
        <form
          onSubmit={LoginHandler}
          className=" mb-2 w-80 max-w-screen-lg sm:w-96 pt-8 border-t-4 border-blue-gray-600"
        >
          <div className="mb-4 flex flex-col gap-6">
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
            Log In
          </Button>

          <Typography
            color="gray"
            className="mt-4 text-center font-normal"
          >
            New To the Site ?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
