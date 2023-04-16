import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "../src/assets/sass/style.scss";
import { routerProviderProps } from "./router";
import "./server";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Toaster
      containerClassName="toast-alert"
      toastOptions={{ duration: 5000 }}
    />
    <RouterProvider {...routerProviderProps} />
  </Provider>
);
