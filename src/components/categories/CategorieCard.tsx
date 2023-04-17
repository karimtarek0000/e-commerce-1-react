import { Link } from "react-router-dom";
import { CategorieCardTypes } from "../../types";

function CategorieCard({
  _id,
  name,
  image,
  slug,
}: CategorieCardTypes): JSX.Element {
  return (
    <Link to="/" className="col category-card">
      <img src={image} alt="" loading="lazy" />
      <h3 className="category-card__title">{name}</h3>
    </Link>
  );
}

export default CategorieCard;
