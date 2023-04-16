import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import RenderSVG from "../svg/RenderSVG";

function NavC(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
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

          {/*  */}
          <div className="flex-end-center">
            <RenderSVG className="me-5 cursor-pointer" name="profile" />
            <Cart />
            {/* Toggle button */}
            <Navbar.Toggle className="ms-4 fs-2" aria-controls="navbarScroll" />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavC;
