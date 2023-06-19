import { Link } from "react-router-dom";
import { CategorieCardTypes } from "../../types";

function CategorieCard({
  _id: id,
  name,
  image,
  slug,
  type,
}: CategorieCardTypes): JSX.Element {
  return (
    <Link
      to={`products/${type}/${slug}/${id}`}
      className="col category-card"
      style={{ minHeight: type === "category" ? "44.5rem" : "22.2rem" }}
    >
      <img src={image} alt={name} loading="lazy" />
      <h3 className="category-card__title">
        {type === "category" ? name : ""}
      </h3>
    </Link>
  );
}

export default CategorieCard;
