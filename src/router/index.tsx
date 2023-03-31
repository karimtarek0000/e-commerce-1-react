import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Dashboard from "../layouts/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
// import { lazyLoadRoutes } from "./lazy";

const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "about",
        index: true,
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      }
    ],
  },
]);

export const routerProviderProps: RouterProviderProps = {
  router,
};
