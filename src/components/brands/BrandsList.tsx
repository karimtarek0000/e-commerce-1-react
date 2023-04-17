import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../store/categories";
import { RootStateCategories } from "../../types";
import CategorieCard from "../categories/CategorieCard";
import CategoriesLoading from "../categories/CategoriesLoading";

function BrandsList(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading, brands } = useSelector(
    (state: RootStateCategories) => state.categories
  );

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  let cards = brands.map(({ _id, name, image, slug }) => (
    <CategorieCard
      key={_id}
      _id={_id}
      name={name}
      image={image}
      slug={slug}
      type="brands"
    />
  ));

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
      {loading ? <CategoriesLoading /> : cards}
    </div>
  );
}

export default BrandsList;
