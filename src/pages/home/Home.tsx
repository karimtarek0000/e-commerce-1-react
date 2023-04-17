import { Container } from "react-bootstrap";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <>
      {/* <Slider /> */}
      <Container className="mt-4">
        <div className="row row-cols-4 gx-5 gy-4">
          <div className="col card">
            <img
              className="obj-fit"
              src="https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747343/Route-Academy-categories/1681511964020.jpeg"
              alt=""
              loading="lazy"
            />
            <div className="card__overlay"></div>
            <h3 className="card__title">test</h3>
          </div>
          <div className="col card">
            <img
              className="obj-fit"
              src="https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747343/Route-Academy-categories/1681511964020.jpeg"
              alt=""
              loading="lazy"
            />
            <div className="card__overlay"></div>
            <h3 className="card__title">test</h3>
          </div>
          <div className="col card">
            <img
              className="obj-fit"
              src="https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747343/Route-Academy-categories/1681511964020.jpeg"
              alt=""
              loading="lazy"
            />
            <div className="card__overlay"></div>
            <h3 className="card__title">test</h3>
          </div>
          <div className="col card">
            <img
              className="obj-fit"
              src="https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747343/Route-Academy-categories/1681511964020.jpeg"
              alt=""
              loading="lazy"
            />
            <div className="card__overlay"></div>
            <h3 className="card__title">test</h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
