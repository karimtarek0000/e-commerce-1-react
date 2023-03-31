import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

function Auth() {
  return (
    <>
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
}

export default Auth;
