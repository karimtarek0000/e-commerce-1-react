import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
const logo: string = require("../../assets/images/logos/logo.svg").default;

function Auth(): JSX.Element {
  return (
    <>
      <Container fluid>
        <div className="width-40 mx-auto height-100 d-flex flex-column justify-content-center">
          {/* Logo */}
          <img className="align-self-center img-150 mb-4" src={logo} alt="logo" />

          {/* Pages */}
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Auth;
