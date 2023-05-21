import { Col } from "react-bootstrap";
import { ProductCardType } from "../../types";
import Price from "./Price";
import RatingProduct from "./RatingProduct";
import { PropsWithChildren } from "react";

type DetailsProduct = PropsWithChildren<{
  product: ProductCardType;
}>;

const InfoDetailsProduct = ({
  product,
  children,
}: DetailsProduct): JSX.Element => {
  const { title, description, ratingsAverage, priceAfterDiscount, price } =
    product;

  return (
    <Col className="order-1 order-md-2">
      <h1 className="fs-1 mb-3">{title}</h1>
      <p className="fs-4">{description}</p>

      <RatingProduct
        className="flex-start-center mt-2 mb-3"
        rating={ratingsAverage}
      />

      <Price price={price} afterDiscount={priceAfterDiscount} />

      {children}
    </Col>
  );
};

export default InfoDetailsProduct;
