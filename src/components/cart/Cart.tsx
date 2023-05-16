import { Link } from "react-router-dom";
import RenderSVG from "../svg/RenderSVG";

function Cart({ count }: { count: number }): JSX.Element {
  return (
    <Link to="cart" className="position-relative">
      {count > 0 && (
        <span className="badge">
          <span className="fs-5">{count}</span>
        </span>
      )}
      <RenderSVG className="cursor-pointer" name="cart" />
    </Link>
  );
}

export default Cart;
