import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootStateProducts } from "../types";
import { getAllProducts } from "../store/products";

export const useProducts = (status: boolean = true) => {
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { id, name } = useParams();
  const { loading, products, total } = useSelector(
    (state: RootStateProducts) => state.products
  );
  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    if (status) {
      dispatch(
        getAllProducts({
          categoryId: id as string,
          numPage: currentPage,
          filter,
        })
      );
    }
  }, [dispatch, id, currentPage, filter, status]);

  return {
    name,
    products,
    loading,
    currentPage,
    totalPages,
    setCurrentPage,
    setFilter,
  };
};
