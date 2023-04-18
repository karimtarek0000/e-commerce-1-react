import { Rating } from "react-simple-star-rating";
import { ProductCardType } from "../../types";
import ActionBtn from "../buttons/ActionBtn";
import RenderSVG from "../svg/RenderSVG";

function ProductCard({
  name,
  title,
  imageCover,
  price,
  priceAfterDiscount,
  description,
  ratingsAverage,
}: ProductCardType): JSX.Element {
  return (
    <div className="col">
      <div className="border rounded overflow-hidden">
        <img
          src={imageCover}
          alt={name}
          loading="lazy"
          className="img-resize mh-300"
        />
        <div className="p-2">
          <h4 className="fs-2 text-capitalize">{title}</h4>
          <p className="fs-4 truncate-par">{description}</p>

          <div className="flex-center fs-4 gap-4">
            {priceAfterDiscount && (
              <span className="fw-bold fs-2">${priceAfterDiscount}</span>
            )}
            <span className="td-through">${price}</span>
          </div>

          <div className="flex-center mt-3">
            <Rating
              initialValue={ratingsAverage}
              size={25}
              allowFraction={true}
              readonly
            />
          </div>

          <div className="mt-3">
            <ActionBtn loading={false} disabled={false}>
              <RenderSVG name="cart" size="1.6rem" style={{ fill: "white" }} />
              Add to cart
            </ActionBtn>
          </div>
          <div className="mt-3">
            <ActionBtn loading={false} disabled={false}>
              <RenderSVG
                name="favorit"
                size="1.6rem"
                style={{ fill: "white" }}
              />
              Add to favorit
            </ActionBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
