import { useSearchParams } from "react-router-dom";

const useQuery = (query: string = "redirect") => {
  const [search] = useSearchParams();

  const getQuery: string = search.get(query) as string;
  const path: string = getQuery ? `/product/${getQuery}` : "/";

  // For routing
  const signUpLink = getQuery
    ? `/auth/sign-up?${query}=${getQuery}`
    : "/auth/sign-up";
  const logInLink = getQuery ? `/auth?${query}=${getQuery}` : "/auth";

  return {
    path,
    signUpLink,
    logInLink,
  };
};
export default useQuery;
