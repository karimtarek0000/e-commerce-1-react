import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Logo from "../../components/logo/Logo";
import guard from "../../gurad/gurad";

function Auth(): JSX.Element {
  return (
    <Container fluid>
      <div className="mx-auto h-1vh d-flex flex-column justify-content-center">
        {/* Start row */}
        <div className="row justify-content-center">
          {/* Start col - image */}
          <div className="d-none d-lg-flex col-lg-4 mt-4 align-items-center justify-content-center">
            <img
              className="img-fluid"
              src="https://static.vecteezy.com/system/resources/previews/005/638/074/original/illustration-isometric-concept-safety-of-online-shopping-in-e-commerce-stores-free-vector.jpg"
              alt="e-commerce"
              loading="lazy"
            />
          </div>
          {/* Start col - form */}
          <div className="col-sm-6 col-lg-5">
            {/* Logo */}
            <div className="text-center">
              <Logo />
            </div>

            {/* Pages */}
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default guard(Auth, "auth");
