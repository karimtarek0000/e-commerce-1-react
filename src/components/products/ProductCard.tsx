import { Link } from "react-router-dom";
import { ProductCardType } from "../../types";
import Price from "./Price";
import RatingProduct from "./RatingProduct";
import AddToCart from "./AddToCart";

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

          <Price
            className="flex-center"
            price={price}
            afterDiscount={priceAfterDiscount}
          />

          <RatingProduct className="flex-center mt-3" rating={ratingsAverage} />

          <AddToCart className="mt-3" productId={id} />

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
