import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Dashboard from "../layouts/dashboard/Dashboard";
import NotFound from "../pages/404/NotFound";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Cart from "../pages/cart/Cart";
import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Products from "../pages/products/Products";
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
        path: "products/:type/:name/:id",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
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
