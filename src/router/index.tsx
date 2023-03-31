import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Dashboard from "../layouts/dashboard/Dashboard";

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
]);

export const routerProviderProps: RouterProviderProps = {
  router,
};
