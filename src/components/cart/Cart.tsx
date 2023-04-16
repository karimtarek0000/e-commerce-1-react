import RenderSVG from "../svg/RenderSVG";

function Cart(): JSX.Element {
  return (
    <div className="position-relative">
      {/* <span className="badge">
        <span className="fs-5">22</span>
      </span> */}
      <RenderSVG className="cursor-pointer" name="cart" />
    </div>
  );
}

export default Cart;
