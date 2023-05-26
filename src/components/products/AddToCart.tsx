import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { addToCart, getCart } from "../../store/cart";
import ActionBtn from "../buttons/ActionBtn";
import RenderSVG from "../svg/RenderSVG";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootStateCart } from "../../types";

type AddToCartTypes = {
  productId: string;
  className?: string;
};

const AddToCart = ({ productId, className }: AddToCartTypes): JSX.Element => {
  const { idsInCart } = useSelector((state: RootStateCart) => state.cart);
  const [loading, setLoading] = useState<boolean>(false);
  const distpatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();
  const isAuth = useAuth();

  const ifIdIncluded = (): boolean => idsInCart.includes(productId);
  const ifProductExistCart = ifIdIncluded();

  const addToCartHandler = async (
    e: ChangeEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();

    if (!isAuth) {
      navigate(`/auth?fallback=${productId}`, { replace: true });
      toast.error("You must be logged in first 👋");
      return;
    }

    try {
      setLoading(true);
      const { message } = await distpatch(addToCart(productId)).unwrap();
      await distpatch(getCart()).unwrap();

      toast.success(`${message} 👋`);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <ActionBtn
        action={addToCartHandler}
        loading={loading}
        disabled={ifProductExistCart}
      >
        <RenderSVG
          name={ifProductExistCart ? "added-favorit" : "favorit"}
          size="1.6rem"
          style={{ fill: "white" }}
        />
        {ifProductExistCart ? "in cart" : "Add to Cart"}
      </ActionBtn>
    </div>
  );
};

export default AddToCart;
