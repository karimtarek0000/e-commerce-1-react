import { useSelector } from "react-redux";
import { RootStateCart } from "../../types";

function Cart() {
  const { products } = useSelector((state: RootStateCart) => state.cart);

  return (
    <>
      <h1>cart</h1>
      <pre>{JSON.stringify(products)}</pre>
    </>
  );
}

export default Cart;
