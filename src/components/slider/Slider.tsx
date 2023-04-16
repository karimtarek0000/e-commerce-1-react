import { Carousel } from "react-bootstrap";

function Slider(): JSX.Element {
  return (
    <Carousel className="h-1vh" indicators={false}>
      <Carousel.Item className="h-1vh">
        <img
          className="d-block object-fit-cover w-100 h-1vh"
          src="https://images.unsplash.com/photo-1500423079914-b65af272b8db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption className="top-50 translate-middle-y">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
