import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const guard = (Component: any, type: string = "dashboard") => {
  const Wrapper = (props: object) => {
    const isAuth = useAuth();

    const status = type === "auth" ? !isAuth : isAuth;
    const forRedirect = type === "auth" ? "/" : "/auth";

    return status ? <Component {...props} /> : <Navigate to={forRedirect} />;
  };
  return Wrapper;
};

export default guard;
