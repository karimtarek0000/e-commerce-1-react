import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { addToCart, getCart } from "../../store/cart";
import ActionBtn from "../buttons/ActionBtn";
import RenderSVG from "../svg/RenderSVG";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type AddToCartTypes = {
  productId: string;
  className?: string;
};

const AddToCart = ({ productId, className }: AddToCartTypes): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const distpatch = useDispatch<ThunkDispatch<any, any, any>>();
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
      <ActionBtn action={addToCartHandler} loading={loading} disabled={false}>
        <RenderSVG name="favorit" size="1.6rem" style={{ fill: "white" }} />
        Add to Cart
      </ActionBtn>
    </div>
  );
};

export default AddToCart;
