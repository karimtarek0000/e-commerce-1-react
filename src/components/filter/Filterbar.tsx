import { Button, Col, Row } from "react-bootstrap";
import RenderSVG from "../svg/RenderSVG";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import RangePrice from "./RangePrice";

const FilterBar = (): JSX.Element => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => setRating(rate);

  return (
    <div className="my-5">
      <p className="fs-2">
        <span className="fw-bold mb-5 d-inline-block">You can filter by:</span>{" "}
        Rating / Price range
      </p>
      <Row className="row row-cols-3">
        <Col>
          <Button
            className="flex-center gap-3 flex-grow-1 flex-lg-grow-0"
            variant="primary"
            type="submit"
          >
            Filter
            <RenderSVG name="filter" size="2rem" />
          </Button>
        </Col>

        <Col className="d-flex justify-content-center">
          <RangePrice />
        </Col>

        <Col className="d-flex gap-2 align-items-center justify-content-end">
          <span className="fs-2">{rating}</span>
          <Rating
            onClick={handleRating}
            initialValue={rating}
            size={25}
            allowFraction={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterBar;
