import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../store/products";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../types";
import { Col, Container, Row } from "react-bootstrap";
import ImageCard from "../../components/products/ImageCard";
import InfoDetailsProduct from "../../components/products/InfoDetailsProduct";
import { Skeleton } from "../../components/skeleton/Skeleton";

function ProductDetails() {
  const { id } = useParams();
  const { loading, product } = useSelector(
    (state: RootStateProducts) => state.products
  );
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getProduct(id as string));
  }, [dispatch, id]);

  return (
    <Container>
      <Row className="flex-column flex-md-row mt-5 align-items-center">
        {loading ? (
          <>
            <Col md="6" className="order-2 order-md-1">
              <div className="d-none d-md-block">
                <Skeleton.ProductDetails type="image" />
              </div>
              <div className="d-md-none">
                <Skeleton.ProductDetails type="imageResponsive" />
              </div>
            </Col>
            <Col md="6" className="order-1 order-md-2">
              <Skeleton.ProductDetails />
            </Col>
          </>
        ) : (
          <>
            {/* Images */}
            <ImageCard images={product.images} />
            {/* Info */}
            <InfoDetailsProduct product={product} />
          </>
        )}
      </Row>
    </Container>
  );
}

export default ProductDetails;
