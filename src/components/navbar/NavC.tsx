import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStateAuth, RootStateCart } from "../../types";
import AuthLinks from "../authLinks/AuthLinks";
import Cart from "../cart/Cart";
import Favorit from "../favorit/Favorit";
import Logo from "../logo/Logo";
import Profile from "../profile/Profile";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import { getCart } from "../../store/cart";

function NavC(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loggedIn, token, user } = useSelector(
    (state: RootStateAuth) => state.auth
  );
  const { numOfCartItems } = useSelector((state: RootStateCart) => state.cart);

  const statusAuth: Function = useCallback(
    (): boolean => !!(loggedIn && token && user),
    [token, loggedIn, user]
  );

  useEffect(() => {
    if (statusAuth()) dispatch(getCart());
  }, [dispatch, statusAuth]);

  return (
    <Navbar className="shadow" bg="light" expand="lg">
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
            {statusAuth() ? (
              <div className="flex-center">
                <Profile />
                <div className="mx-5">
                  <Cart count={numOfCartItems} />
                </div>
                <Favorit />
              </div>
            ) : (
              <AuthLinks />
            )}
            <Navbar.Toggle className="ms-4 fs-2" aria-controls="navbarScroll" />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavC;
