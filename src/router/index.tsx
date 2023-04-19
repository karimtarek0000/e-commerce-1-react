import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Dashboard from "../layouts/dashboard/Dashboard";
import NotFound from "../pages/404/NotFound";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Brands from "../pages/brands/Brands";
import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
// import { lazyLoadRoutes } from "./lazy";

const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "brands/:name/:id",
        element: <Brands />,
      },
      {
        path: "categories/:name/:id",
        element: <Categories />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const routerProviderProps: RouterProviderProps = {
  router,
};
