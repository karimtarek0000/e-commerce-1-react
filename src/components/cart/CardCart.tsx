import { Row, Col, Button } from "react-bootstrap";
import Price from "../products/Price";
import RatingProduct from "../products/RatingProduct";
import RenderSVG from "../svg/RenderSVG";
import { ProductCart } from "../../types/store";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { removeProduct } from "../../store/cart";
import ModalParent from "../modals/ModalParent";

type CardCartType = {
  productCard: ProductCart;
};

const CardCart = ({ productCard }: CardCartType): JSX.Element => {
  const {
    price,
    product: { id, title, imageCover, ratingsAverage, brand, category },
  } = productCard;
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const deleteItemHandler = async (): Promise<void> => {
    setLoading(true);
    await dispatch(removeProduct(id)).unwrap();
    setLoading(false);
    setModalShow(false);
  };

  return (
    <Row className="border border-dark rounded-3 h-md-150 overflow-hidden mb-4 justify-content-center justify-content-md-between">
      <Col sm="12" md="3" lg="3" className="p-0 maxh-300">
        <img
          className="img-resize"
          src={imageCover}
          loading="lazy"
          alt={title}
        />
      </Col>
      <Col sm="12" md="6" className="flex-start-center h-100 py-4 py-md-0">
        <Row className="flex-column w-100">
          {/* Name for product */}
          <Col className="text-center text-md-start">
            <h4 className="fs-2 truncate-head mb-2">{title}</h4>
          </Col>
          {/* Price for product */}
          <Col className="d-flex justify-content-center justify-content-md-start">
            <Price price={price} />
          </Col>
          {/* Rating for product */}
          <Col className="d-flex flex-column align-items-center align-items-md-start">
            <RatingProduct
              className="flex-start-center mt-2"
              rating={ratingsAverage}
            />
            <div className="flex-start-center mt-2 gap-3">
              <Link
                to={`/products/brand/${brand.slug}/${brand._id}`}
                className="text-uppercase"
              >
                Brand
              </Link>
              <Link
                to={`/products/category/${category.slug}/${category._id}`}
                className="text-uppercase"
              >
                Category
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      {/* Quantity for product */}
      <Col
        sm="6"
        md="2"
        lg="2"
        className="flex-center h-100 mt-3 mt-md-0 flex-column"
      >
        <input
          type="number"
          value={quantity}
          className="form-control text-center"
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={0}
          placeholder="Quantity"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        {/*  */}
        <Button
          className="flex-center my-3 py-3 w-100 gap-3"
          variant="danger"
          type="submit"
          onClick={() => setModalShow(true)}
        >
          Delete
          <RenderSVG name="remove" size="1.7rem" />
        </Button>
      </Col>

      {/* Modal for delete a product */}
      <ModalParent
        show={modalShow}
        onHide={() => setModalShow(false)}
        confirm="true"
        onConfirm={deleteItemHandler}
        loading={loading}
        title="Delete a product"
      >
        <h2 className="fs-3">
          Are you sure for delete a product from cart page ?
        </h2>
      </ModalParent>
    </Row>
  );
};

export default CardCart;
