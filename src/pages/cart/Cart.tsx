import { useSelector } from "react-redux";
import { RootStateCart } from "../../types";
import { Col, Container, Row } from "react-bootstrap";
import CardCart from "../../components/cart/CardCart";
import { ProductCart } from "../../types/store";
import guard from "../../gurad/gurad";
import { Skeleton } from "../../components/skeleton/Skeleton";
import CheckOut from "../../components/cart/CheckOut";
import NoData from "../../components/noData/NoData";
import RemoveAll from "../../components/cart/RemoveAll";

function Cart() {
  const { products, numOfCartItems, totalCartPrice, loading, ownerId } =
    useSelector((state: RootStateCart) => state.cart);

  const renderCardCart = products?.map((product: ProductCart) => {
    return <CardCart key={product._id} productCard={product} />;
  });

  return (
    <Container className="px-4 px-lg-0">
      {numOfCartItems > 0 && (
        <Row className="mt-4 justify-content-between align-items-center">
          <Col cols="3" className="flex-start flex-column">
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
          <Col cols="3" className="d-flex align-items-end flex-column gap-2">
            <CheckOut ownerId={ownerId} />
            <RemoveAll />
          </Col>
          <hr className="mt-3" />
        </Row>
      )}

      {/* Cards */}
      <div className="mt-2">
        {loading ? (
          <>
            <div className="d-none d-md-block mt-5">
              <Skeleton.CardCart />
            </div>
            <div className="d-flex justify-content-center mt-5 d-md-none">
              <Skeleton.CardCart type="responsive" />
            </div>
          </>
        ) : (
          renderCardCart
        )}

        {/* If no data exist */}
        <NoData
          data={numOfCartItems}
          loading={loading}
          title="No there any product in cart"
          img="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
        />
      </div>
    </Container>
  );
}

export default guard(Cart);
