// import { useSelector } from "react-redux";
// import { RootStateCart } from "../../types";

import { Container } from "react-bootstrap";
import CardCart from "../../components/cart/CardCart";

function Cart() {
  // const { products } = useSelector((state: RootStateCart) => state.cart);

  return (
    <Container style={{ minHeight: "70vh" }}>
      <div className="mt-5">
        <CardCart />
      </div>
    </Container>
  );
}

export default Cart;
