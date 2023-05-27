import { Row, Col, Button } from "react-bootstrap";
import Price from "../products/Price";
import RatingProduct from "../products/RatingProduct";
import RenderSVG from "../svg/RenderSVG";
import { ProductCart } from "../../types/store";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { removeProduct, updateQuantity } from "../../store/cart";
import toast from "react-hot-toast";
import { Suspense, lazy } from "react";

const ModalParent = lazy(() => import("../modals/ModalParent"));

type CardCartType = {
  productCard: ProductCart;
};

const CardCart = ({ productCard }: CardCartType): JSX.Element => {
  const {
    price,
    count,
    product: {
      id,
      title,
      imageCover,
      quantity: _quantity,
      ratingsAverage,
      brand,
      category,
    },
  } = productCard;
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(count);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const deleteItemHandler = async (): Promise<void> => {
    setLoading(true);
    await dispatch(removeProduct(id)).unwrap();
    toast.success("Product deleted successfully");
    setLoading(false);
    setModalShow(false);
  };

  const setQuantityHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const newQuantity = Number(e.target.value);
    if (newQuantity <= _quantity && newQuantity > 0)
      return setQuantity(newQuantity);
    toast.error(
      "You must enter quantity less than or equal available quantity"
    );
  };

  const updateQuantityHandler = async (): Promise<void> => {
    await dispatch(updateQuantity({ productId: id, count: quantity })).unwrap();
    toast.success("Has been updated quantity successfully");
  };

  return (
    <Row className="border border-dark rounded-3 h-md-150 overflow-hidden mb-4 justify-content-center justify-content-md-between">
      <Col sm="12" md="3" lg="3" className="p-0 maxh-300">
        <img
          className="img-resize position-bottom"
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
          <Col className="d-flex justify-content-center justify-content-md-start align-items-center gap-3">
            <Price price={price} />-
            <h4 className="text-capitalize fs-4 mt-1">
              available quantity:{" "}
              <span className="bg-primary px-2 py-1 text-white rounded">
                {_quantity}
              </span>
            </h4>
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
              <Link to={`/product/${id}`} className="text-uppercase">
                More about product
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
        <h5>Enter Quantity</h5>
        <input
          type="number"
          value={quantity}
          className="form-control text-center"
          onChange={setQuantityHandler}
          onBlur={updateQuantityHandler}
          min={0}
          placeholder="Quantity"
          aria-label="quantity"
          aria-describedby="quantity"
        />

        {/*  */}
        <Button
          className="flex-center my-3 py-3 w-100 gap-3"
          variant="danger"
          type="submit"
          onClick={(e) => setModalShow(true)}
        >
          Delete
          <RenderSVG name="remove" size="1.7rem" />
        </Button>
      </Col>

      {/* Modal for delete a product */}
      <Suspense>
        {modalShow && (
          <ModalParent
            show={modalShow}
            onHide={() => setModalShow(false)}
            confirm="true"
            onConfirm={deleteItemHandler}
            loading={loading}
            title="Delete a Product"
          >
            <h2 className="fs-3 fw-normal py-3 text-center">
              Are sure you want delete <span className="fw-bold">{title}</span>{" "}
              from your cart ?
            </h2>
          </ModalParent>
        )}
      </Suspense>
    </Row>
  );
};

export default CardCart;
