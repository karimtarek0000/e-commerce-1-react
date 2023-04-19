import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../components/categories/SkeletonLoader";
import ProductCard from "../../components/products/ProductCard";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { getAllProducts } from "../../store/products";
import { RootStateProducts } from "../../types";

function Categories() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { id } = useParams();
  const { loading, products } = useSelector(
    (state: RootStateProducts) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts(id as string));
  }, [dispatch, id]);

  const cards = products.map((prod) => (
    <ProductCard key={prod._id} {...prod} />
  ));

  return (
    <Container>
      <div className="grid-cards">
        {loading ? (
          <SkeletonLoader>
            <Skeleton.Product />
          </SkeletonLoader>
        ) : (
          cards
        )}
      </div>
    </Container>
  );
}

export default Categories;
