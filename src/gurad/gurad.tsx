import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootStateAuth } from "../types";

const guard = (Component: any) => {
  const Wrapper = (props: object) => {
    const { user, token, loggedIn } = useSelector(
      (state: RootStateAuth) => state.auth
    );
    const isAuth: Function = (): boolean => !!(user && token && loggedIn);

    return isAuth ? <Component {...props} /> : <Navigate to="/" />;
  };
  return Wrapper;
};

export default guard;
