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
import ActionBtn from "../../components/buttons/ActionBtn";
import RenderSVG from "../../components/svg/RenderSVG";

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
      {/* Product card details */}
      <Row className="flex-column flex-md-row mt-5">
        {loading ? (
          "Loading..."
        ) : (
          <>
            {/* Images */}
            <ImageCard images={product.images} />
            {/* Info */}
            <InfoDetailsProduct product={product}>
              <div className="mt-3">
                <ActionBtn
                  action={addToCartHandler}
                  loading={loading}
                  disabled={false}
                >
                  <RenderSVG
                    name="cart"
                    size="1.6rem"
                    style={{ fill: "white" }}
                  />
                  Add to cart
                </ActionBtn>
              </div>
            </InfoDetailsProduct>
          </>
        )}
      </Row>
    </Container>
  );
}

export default ProductDetails;
