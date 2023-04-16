import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Profile from "../profile/Profile";
import AuthLinks from "../authLinks/AuthLinks";

function NavC(): JSX.Element {
  return (
    <Navbar className="shadow" bg="light" expand="lg" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <Logo className="img-100 me-auto" />
        </Navbar.Brand>

        {/* Navbar items */}
        <Nav
          className="me-auto overflow-visible flex-grow-1 d-flex  justify-content-between"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* Search */}
          <Form className="d-none d-lg-flex">
            <Form.Control
              type="text"
              placeholder="Search products..."
              className="me-2 fs-3"
              aria-label="Search"
              style={{ width: "400px" }}
            />
          </Form>

          <div className="flex-end-center">
            {/* <div className="flex-center">
              <Profile />
              <Cart />
            </div> */}
            <AuthLinks />
            <Navbar.Toggle className="ms-4 fs-2" aria-controls="navbarScroll" />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavC;
