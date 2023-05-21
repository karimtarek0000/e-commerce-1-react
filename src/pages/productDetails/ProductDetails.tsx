import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../store/products";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../types";
import { Container, Row } from "react-bootstrap";
import ImageCard from "../../components/products/ImageCard";
import InfoDetailsProduct from "../../components/products/InfoDetailsProduct";

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
          "Loading..."
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
