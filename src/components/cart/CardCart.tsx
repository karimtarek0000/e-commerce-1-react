import { Row, Col } from "react-bootstrap";
import Price from "../products/Price";
import RatingProduct from "../products/RatingProduct";
import RenderSVG from "../svg/RenderSVG";

const CardCart = (): JSX.Element => {
  return (
    <Row className="border border-dark rounded-3 h-md-150 overflow-hidden mb-4">
      <Col className="p-0">
        <img
          className="img-resize"
          src="https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg"
          loading="lazy"
          alt=""
        />
      </Col>
      <Col md="6" className="flex-start-center h-100">
        <Row className="flex-column">
          {/* Name for product */}
          <Col>
            <h4 className="fs-2 truncate-head mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              dolores.
            </h4>
          </Col>
          {/* Price for product */}
          <Col>
            <Price price={2000} afterDiscount={1500} />
          </Col>
          {/* Rating for product */}
          <Col>
            <RatingProduct className="flex-start-center mt-3" rating={2} />
          </Col>
        </Row>
      </Col>
      {/* Quantity for product */}
      <Col md="1" className="flex-center h-100">
        <input
          type="number"
          value={0}
          className="form-control text-center"
          placeholder="Quantity"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </Col>
      {/* Delete product */}
      <Col md="1" className="flex-center h-100">
        <RenderSVG name="cart" size="2rem" />
      </Col>
    </Row>
  );
};

export default CardCart;
