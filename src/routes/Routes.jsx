import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Pages/Homepage/Homepage";
import Register from "../components/Pages/Register/Register";
import Login from "../components/Pages/Login/Login";
import ChefDetails from "../components/Pages/Chefdetails/ChefDetails";
import ProtectedRoutes from "./ProtectedRoutes";
import allChefs from "../DataLoader/allChefs";
import getChefDetails from "../DataLoader/getChefDetails";
import NotFound from "../components/Pages/NotFound/NotFound";
import Blog from "../components/Pages/Blogs/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: allChefs,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chef-details/:chefId",
        element: (
          <ProtectedRoutes>
            <ChefDetails />
          </ProtectedRoutes>
        ),
        loader: getChefDetails,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
