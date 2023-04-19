import { Link } from "react-router-dom";
import RenderSVG from "../svg/RenderSVG";

function Cart(): JSX.Element {
  return (
    <Link to="cart" className="position-relative">
      <span className="badge">
        <span className="fs-5">22</span>
      </span>
      <RenderSVG className="cursor-pointer" name="cart" />
    </Link>
  );
}

export default Cart;
