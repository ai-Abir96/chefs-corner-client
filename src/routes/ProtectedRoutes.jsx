import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <ReactLoading type="balls" color="red" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return (
    <Navigate
      state={{ from: location }}
      to="/login"
      replace
    ></Navigate>
  );
};

export default ProtectedRoutes;
