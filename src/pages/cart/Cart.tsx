import { useSelector } from "react-redux";
import { RootStateCart } from "../../types";
import { Col, Container, Row } from "react-bootstrap";
import CardCart from "../../components/cart/CardCart";
import { ProductCart } from "../../types/store";
import guard from "../../gurad/gurad";

function Cart() {
  const { products, numOfCartItems, totalCartPrice } = useSelector(
    (state: RootStateCart) => state.cart
  );

  const renderCardCart = products?.map((product: ProductCart) => {
    return <CardCart key={product._id} productCard={product} />;
  });

  return (
    <Container className="px-4 px-lg-0" style={{ minHeight: "70vh" }}>
      {numOfCartItems > 0 && (
        <Row className="mt-4">
          <Col className="flex-start flex-column">
            <h3 className="fs-2 mb-3">
              Count:
              <span className="bg-primary text-white px-3 py-1 rounded-1 ms-5">
                {numOfCartItems}
              </span>
            </h3>
            <h3 className="fs-2">
              Total:
              <span className="bg-primary text-white px-3 py-1 rounded-1 ms-5">
                ${totalCartPrice.toLocaleString("en-US")}
              </span>
            </h3>
          </Col>
        </Row>
      )}

      {/* Cards */}
      <div className="mt-5">{renderCardCart}</div>
    </Container>
  );
}

export default guard(Cart);
