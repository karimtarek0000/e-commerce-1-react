import { Link } from "react-router-dom";
const Img404 = require("../../assets/images/404/404.svg").default;

function NotFound(): JSX.Element {
  return (
    <div className="row flex-center h-1vh">
      <div className="col-sm-5 flex-center flex-column">
        <img className="img-resize" src={Img404} alt="404" />
        <p className="fs-4 fw-bold mb-5 text-center">
          This page not found on our website don't worry go to home ❤️😃
        </p>
        <Link replace={true} className="btn btn-primary" to="/">
          Go to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
