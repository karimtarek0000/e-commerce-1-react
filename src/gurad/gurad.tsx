import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootStateAuth } from "../types";

const guard = (Component: any, type: string = "dashboard") => {
  const Wrapper = (props: object) => {
    const { user, token, loggedIn } = useSelector(
      (state: RootStateAuth) => state.auth
    );
    const isAuth: Function = (): boolean => !!(user && token && loggedIn);

    const status = type === "auth" ? !isAuth() : isAuth();
    const forRedirect = type === "auth" ? "/" : "/auth";

    return status ? <Component {...props} /> : <Navigate to={forRedirect} />;
  };
  return Wrapper;
};

export default guard;
