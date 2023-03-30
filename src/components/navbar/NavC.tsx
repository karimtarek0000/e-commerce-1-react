import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavC() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavC;
