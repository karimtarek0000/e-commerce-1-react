import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ProductCardType } from "../../types";
import ActionBtn from "../buttons/ActionBtn";
import RenderSVG from "../svg/RenderSVG";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { addToCart } from "../../store/cart";
import useAuth from "../../hooks/useAuth";
import Price from "./Price";
import RatingProduct from "./RatingProduct";

function ProductCard({
  _id: id,
  name,
  title,
  imageCover,
  price,
  priceAfterDiscount,
  description,
  ratingsAverage,
  quantity,
}: ProductCardType): JSX.Element {
  const distpatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuth = useAuth();

  const addToCartHandler = async (
    e: ChangeEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();

    if (!isAuth) {
      navigate("/auth", { replace: true });
      toast.error("You must be logged in first 👋");
      return;
    }

    try {
      setLoading(true);
      const { message } = await distpatch(addToCart(id)).unwrap();
      toast.success(`${message} 👋`);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link to={`/product/${id}`} className="col text-dark td-none">
      <div className="border rounded overflow-hidden">
        <img
          src={imageCover}
          alt={name}
          loading="lazy"
          className="img-resize maxh-300"
        />
        <div className="p-2 text-center">
          <h4 className="fs-2 text-capitalize truncate-head">{title}</h4>
          <p className="fs-4 truncate-par h-72 p-0">{description}</p>

          <Price price={price} afterDiscount={priceAfterDiscount} />

          <RatingProduct className="flex-center mt-3" rating={ratingsAverage} />

          <div className="mt-3">
            <ActionBtn
              action={addToCartHandler}
              loading={loading}
              disabled={false}
            >
              <RenderSVG name="cart" size="1.6rem" style={{ fill: "white" }} />
              Add to cart
            </ActionBtn>
          </div>

          <div className="mt-3">
            <ActionBtn
              action={addToCartHandler}
              loading={loading}
              disabled={false}
            >
              <RenderSVG
                name="favorit"
                size="1.6rem"
                style={{ fill: "white" }}
              />
              Add to favorit
            </ActionBtn>
          </div>

          {!quantity && (
            <h2 className="bg-danger text-light py-2 fs-2 text-capitalize mt-3 text-center rounded">
              out of stock
            </h2>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
