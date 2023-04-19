import { Link } from "react-router-dom";
import RenderSVG from "../svg/RenderSVG";

function Favorit(): JSX.Element {
  return (
    <Link to="favorites" className="position-relative">
      <span className="badge">
        <span className="fs-5">4</span>
      </span>
      <RenderSVG
        className="cursor-pointer"
        name="favorit"
        style={{ fill: "black" }}
      />
    </Link>
  );
}

export default Favorit;
