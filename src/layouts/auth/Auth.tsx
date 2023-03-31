import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

function Auth() {
  return (
    <>
      <Container fluid>
        <div className="width-40 mx-auto height-100 d-flex flex-column justify-content-center">
          {/* Title */}
          <h2 className="text-center mb-4">E-commerce</h2>

          {/* Pages */}
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Auth;
