import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ResponsivePagination from "react-responsive-pagination";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../components/categories/SkeletonLoader";
import NoData from "../../components/noData/NoData";
import ProductCard from "../../components/products/ProductCard";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { getAllProducts } from "../../store/products";
import { RootStateProducts } from "../../types";
import FilterBar from "../../components/filter/Filterbar";

function Categories() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { id, name } = useParams();
  const { loading, products, total } = useSelector(
    (state: RootStateProducts) => state.products
  );
  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    dispatch(
      getAllProducts({ categoryId: id as string, numPage: currentPage, filter })
    );
  }, [dispatch, id, currentPage, filter]);

  const cards = products.map((prod) => (
    <ProductCard key={prod._id} {...prod} />
  ));

  return (
    <Container>
      <h1 className="text-center my-5">{name}</h1>

      <FilterBar setFilter={setFilter} />

      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />

      <NoData loading={loading} data={products} title="No there any products" />
      <div className="grid-cards my-5">
        {loading ? (
          <SkeletonLoader>
            <Skeleton.Product />
          </SkeletonLoader>
        ) : (
          cards
        )}
      </div>

      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}

export default Categories;
