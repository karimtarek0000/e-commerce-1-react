import { Rating } from "react-simple-star-rating";

const RatingProduct = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}): JSX.Element => {
  return (
    <div className={className}>
      <Rating initialValue={rating} size={25} allowFraction={true} readonly />
      <span className="fs-2 mx-2 mt-1">{rating}</span>
    </div>
  );
};

export default RatingProduct;
