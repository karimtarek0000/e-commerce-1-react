import { useSelector } from "react-redux";
import { RootStateAuth } from "../types";
import { useCallback } from "react";

const useAuth = () => {
  const { loggedIn, token, user } = useSelector(
    (state: RootStateAuth) => state.auth
  );

  const statusAuth = useCallback(
    (): boolean => !!(loggedIn && token && user),
    [token, user, loggedIn]
  );

  return statusAuth();
};

export default useAuth;
