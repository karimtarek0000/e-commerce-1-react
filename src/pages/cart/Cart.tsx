import { useSelector } from "react-redux";
import { RootStateCart } from "../../types";
import { Container } from "react-bootstrap";
import CardCart from "../../components/cart/CardCart";
import { ProductCart } from "../../types/store";

function Cart() {
  const { products } = useSelector((state: RootStateCart) => state.cart);

  const renderCardCart = products?.map((product: ProductCart) => {
    return <CardCart key={product._id} productCard={product} />;
  });

  return (
    <Container className="px-4 px-lg-0" style={{ minHeight: "70vh" }}>
      <div className="mt-5">{renderCardCart}</div>
    </Container>
  );
}

export default Cart;
