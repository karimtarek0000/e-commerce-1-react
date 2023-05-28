import { Accordion, Container } from "react-bootstrap";
import guard from "../../gurad/gurad";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useCallback, useLayoutEffect, useState } from "react";
import { getAllOrders } from "../../store/cart";
import { RootStateAuth, RootStateCart } from "../../types";
import CardCart from "../../components/cart/CardCart";
import NoData from "../../components/noData/NoData";
import { Skeleton } from "../../components/skeleton/Skeleton";

const Orders = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const {
    user: { id },
  } = useSelector((state: RootStateAuth) => state.auth);
  const { orders } = useSelector((state: RootStateCart) => state.cart);
  const [loading, setLoading] = useState<boolean>(false);

  const allOrders = useCallback(async () => {
    setLoading(true);
    await dispatch(getAllOrders(id)).unwrap();
    setLoading(false);
  }, [dispatch, id]);

  useLayoutEffect(() => {
    allOrders();
  }, [allOrders]);

  const renderCardOrder = orders?.map((order, i) => {
    return (
      <Accordion.Item key={order.id} eventKey={`${i}`}>
        <Accordion.Header>
          <span className="bg-primary py-1 px-2 rounded text-white fs-2">
            #{order.id}
          </span>
          <h4 className="fs-2 ms-3">
            Payment Method:{" "}
            <span className="bg-primary py-1 px-2 rounded text-white text-capitalize">
              {order.paymentMethodType}
            </span>
          </h4>
          <h4 className="fs-2 ms-3">
            Total Price:{" "}
            <span className="bg-primary py-1 px-2 rounded text-white">
              ${order.totalOrderPrice}
            </span>
          </h4>
        </Accordion.Header>
        <Accordion.Body className="fs-3">
          {order.cartItems.map((product) => (
            <CardCart key={product._id} productCard={product} type={false} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <Container>
      <Accordion className="mt-5">
        {loading ? (
          <>
            <div className="d-none d-md-block">
              <Skeleton.CardCart />
            </div>
            <div className="d-md-none">
              <Skeleton.CardCart type="responsive" />
            </div>
          </>
        ) : (
          renderCardOrder
        )}
      </Accordion>

      {/* If no data exist */}
      <NoData
        data={orders.length}
        loading={loading}
        title="No there any order"
        img="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
      />
    </Container>
  );
};

export default guard(Orders);
