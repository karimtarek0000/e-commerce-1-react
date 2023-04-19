import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../store/categories";
import { RootStateCategories } from "../../types";
import CategorieCard from "../categories/CategorieCard";
import SkeletonLoader from "../categories/SkeletonLoader";
import { Skeleton } from "../skeleton/Skeleton";

function BrandsList(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading, brands } = useSelector(
    (state: RootStateCategories) => state.categories
  );

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  let cards = brands.map((brand) => (
    <CategorieCard key={brand._id} {...brand} type="brands" />
  ));

  return (
    <div className="grid-cards">
      {loading ? (
        <SkeletonLoader>
          <Skeleton.Category />
        </SkeletonLoader>
      ) : (
        cards
      )}
    </div>
  );
}

export default BrandsList;
