import { Button } from "react-bootstrap";
import { ProductCardType } from "../../types";
import RenderSVG from "../svg/RenderSVG";

function ProductCard({
  name,
  title,
  image,
  priceAfterDiscount,
  description,
  ratingsAverage,
}: ProductCardType): JSX.Element {
  return (
    <div className="col">
      <div className="border rounded overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="img-resize mh-300"
        />
        <div className="p-2">
          <h4 className="fs-1 text-capitalize">{title}</h4>
          <p className="fs-4 truncate-par">{description}</p>

          <div className="flex-center fs-4 gap-4">
            <span className="fw-bold fs-2">${priceAfterDiscount}</span>
            <span className="td-through">$200</span>
          </div>

          <Button className="w-100 mt-3 flex-center gap-2">
            <RenderSVG name="cart" size="1.6rem" style={{ fill: "white" }} />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
