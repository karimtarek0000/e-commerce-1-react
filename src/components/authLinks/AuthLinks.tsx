import { Link } from "react-router-dom";

function AuthLinks(): JSX.Element {
  return (
    <div className="d-flex gap-2">
      <Link className="btn btn-outline-primary" to="/auth/sign-up">
        Sign up
      </Link>
      <Link className="btn btn-primary" to="/auth">
        Login
      </Link>
    </div>
  );
}

export default AuthLinks;
