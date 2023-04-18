import { Button, Container } from "react-bootstrap";
// import ProductCard from "../../components/products/ProductCard";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
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
      <h1>Categories</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
        {loading ? <h1>loading...</h1> : cards}
      </div>
    </Container>
  );
}

export default Categories;
