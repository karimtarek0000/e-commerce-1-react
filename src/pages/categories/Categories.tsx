import { Button, Container } from "react-bootstrap";
// import ProductCard from "../../components/products/ProductCard";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import ActionBtn from "../../components/buttons/ActionBtn";
import RenderSVG from "../../components/svg/RenderSVG";

function Categories() {
  const [rating] = useState<number>(2.5);

  return (
    <Container>
      <h1>Categories</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
        {/* <ProductCard /> */}
        <div className="col">
          <div className="border rounded overflow-hidden">
            <img
              src="https://res.cloudinary.com/dwp0imlbj/image/upload/Route-Academy-products/1680396593909-2.jpeg"
              alt="name"
              loading="lazy"
              className="img-resize mh-300"
            />
            <div className="p-2">
              <h4 className="fs-1 text-capitalize">title</h4>
              <p className="fs-4 truncate-par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                alias?
              </p>

              <div className="flex-center fs-4 gap-4">
                <span className="fw-bold fs-2">$300</span>
                <span className="td-through">$200</span>
              </div>

              <div className="flex-center mt-3">
                <Rating
                  initialValue={rating}
                  size={25}
                  allowFraction={true}
                  readonly
                />
              </div>

              {/* <Button className="w-100 mt-3 flex-center gap-2">
                <RenderSVG
                  name="cart"
                  size="1.6rem"
                  style={{ fill: "white" }}
                />
                Add to cart
              </Button> */}

              <div className="mt-3">
                <ActionBtn loading={false} disabled={false}>
                  <RenderSVG
                    name="cart"
                    size="1.6rem"
                    style={{ fill: "white" }}
                  />
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
      </div>
    </Container>
  );
}

export default Categories;
