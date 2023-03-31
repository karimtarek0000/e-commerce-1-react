import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

function NavC(): JSX.Element {
  // const navCollapse = useRef<HTMLDivElement>(null);
  // const toggle = useRef<HTMLButtonElement>(null);

  // const navCollapseHandler: MouseEventHandler = () => {
  //   if (window.innerWidth < 992) toggle.current?.click();
  // };

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container className="align-items-end">
        <Navbar.Brand as={Link} to="/">
          <Logo className="img-100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              E-commerce
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-none d-lg-flex flex-grow-1">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavC;
