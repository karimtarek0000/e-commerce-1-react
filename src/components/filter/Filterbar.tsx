import { Button, Col, Row } from "react-bootstrap";
import RenderSVG from "../svg/RenderSVG";
import { Rating } from "react-simple-star-rating";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import RangePrice from "./RangePrice";

const FilterBar = ({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
  const [rating, setRating] = useState<number>(0);
  const [price, setPrice] = useState<[number, number]>([200, 4000]);
  const [statusfilterBtn, setStatusFilterBtn] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<boolean>(false);

  // Handlers
  const handleChange = (event: Event, newValue: number | number[]): void => {
    setStatusFilterBtn(true);
    setPrice(newValue as [number, number]);
  };
  const handleRating = (rate: number): void => {
    setStatusFilterBtn(true);
    setRating(rate);
  };
  const filterHandler: MouseEventHandler = (): void => {
    const queres: string[] = [];
    rating > 1 && queres.push(`&ratingsAverage[lte]=${rating}`);
    queres.push(`&price[gte]=${price[0]}&price[lte]=${price[1]}`);
    const filter = queres.join("");
    setStatusFilter(true);
    setFilter(filter);
  };
  const resetFilterHandler: MouseEventHandler = () => {
    setRating(0);
    setPrice([200, 4000]);
    setFilter("");
    setStatusFilter(false);
    setStatusFilterBtn(false);
  };

  return (
    <div className="my-5">
      <p className="fs-2">
        <span className="fw-bold mb-5 d-inline-block">You can filter by:</span>{" "}
        Rating / Price range
      </p>
      <Row className="row row-cols-3">
        <Col className="flex-y-center gap-3">
          <Button
            disabled={!statusfilterBtn}
            className="flex-center gap-3 flex-grow-1 flex-lg-grow-0"
            variant="primary"
            onClick={filterHandler}
          >
            Filter
            <RenderSVG name="filter" size="2rem" />
          </Button>
          {statusFilter && (
            <Button
              className="flex-center gap-3 flex-grow-1 flex-lg-grow-0 text-capitalize"
              onClick={resetFilterHandler}
              variant="danger"
            >
              clear filter
              <RenderSVG name="remove" size="1.6rem" />
            </Button>
          )}
        </Col>

        <Col className="d-flex justify-content-center">
          <RangePrice
            handleChange={handleChange}
            min={200}
            max={4000}
            value={price}
          />
        </Col>

        <Col className="d-flex gap-2 align-items-center justify-content-end">
          <span className="fs-2">{rating} rate</span>
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
