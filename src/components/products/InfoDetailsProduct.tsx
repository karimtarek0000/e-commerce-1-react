import { Col } from "react-bootstrap";
import { ProductCardType } from "../../types";
import Price from "./Price";
import RatingProduct from "./RatingProduct";
import AddToCart from "./AddToCart";

type DetailsProduct = {
  product: ProductCardType;
};

const InfoDetailsProduct = ({ product }: DetailsProduct): JSX.Element => {
  const {
    _id: id,
    title,
    description,
    ratingsAverage,
    priceAfterDiscount,
    price,
  } = product;

  return (
    <Col className="order-1 order-md-2">
      <h1 className="fs-1 mb-3">{title}</h1>
      <p className="fs-4">{description}</p>

      <RatingProduct
        className="flex-start-center mt-2 mb-3"
        rating={ratingsAverage}
      />

      <Price price={price} afterDiscount={priceAfterDiscount} />

      <AddToCart className="mt-3" productId={id} />
    </Col>
  );
};

export default InfoDetailsProduct;
