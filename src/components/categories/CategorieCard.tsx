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
    <Link to={`/${type}/${slug}/${id}`} className="col category-card">
      <img src={image} alt={name} loading="lazy" />
      <h3 className="category-card__title">
        {type === "categories" ? name : ""}
      </h3>
    </Link>
  );
}

export default CategorieCard;
