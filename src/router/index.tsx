import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Dashboard from "../layouts/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/home/Home";
import { lazyLoadRoutes } from "./lazy";

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
        path: "products/:type/:name/:id",
        element: lazyLoadRoutes("products/Products"),
      },
      {
        path: "cart",
        element: lazyLoadRoutes("cart/Cart"),
      },
      {
        path: "orders",
        element: lazyLoadRoutes("orders/Orders"),
      },
      {
        path: "favorites",
        element: lazyLoadRoutes("favorites/Favorites"),
      },
      {
        path: "product/:id",
        element: lazyLoadRoutes("productDetails/ProductDetails"),
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
        element: lazyLoadRoutes("auth/ForgetPassword"),
      },
    ],
  },
  {
    path: "*",
    element: lazyLoadRoutes("404/NotFound"),
  },
]);

export const routerProviderProps: RouterProviderProps = {
  router,
};
