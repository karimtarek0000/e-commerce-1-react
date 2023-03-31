import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Logo from "../../components/logo/Logo";

function Auth(): JSX.Element {
  return (
    <>
      <Container fluid>
        <div className="width-40 mx-auto height-100 d-flex flex-column justify-content-center">
          {/* Logo */}
          <Logo />

          {/* Pages */}
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Auth;
