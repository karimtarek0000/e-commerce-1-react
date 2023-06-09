import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStateCart } from "../../types";
import AuthLinks from "../authLinks/AuthLinks";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Profile from "../profile/Profile";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getCart } from "../../store/cart";
import useAuth from "../../hooks/useAuth";

function NavC(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const isAuth = useAuth();
  const { numOfCartItems } = useSelector((state: RootStateCart) => state.cart);

  useEffect(() => {
    if (isAuth) dispatch(getCart());
  }, [isAuth, dispatch]);

  return (
    <Navbar className="shadow" sticky="top" bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <Logo className="img-100 me-auto" />
        </Navbar.Brand>

        {/* Navbar items */}
        <Nav
          className="me-auto overflow-visible flex-grow-1 d-flex  justify-content-end"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <div className="flex-end-center">
            {isAuth ? (
              <div className="flex-center">
                <Profile />
                <div className="mx-2">
                  <Cart count={numOfCartItems} />
                </div>
              </div>
            ) : (
              <AuthLinks />
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavC;
