import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categories";
import { RootStateCategories } from "../../types";
import CategorieCard from "./CategorieCard";
import CategoriesLoading from "./CategoriesLoading";

function CategoriesList(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading, categories } = useSelector(
    (state: RootStateCategories) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  let cards = categories.map((categ) => (
    <CategorieCard key={categ._id} {...categ} type="categories" />
  ));

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
      {loading ? <CategoriesLoading /> : cards}
    </div>
  );
}

export default CategoriesList;
