import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ImageCard = ({ images }: { images: string[] }): JSX.Element => {
  const [preview, setPreview] = useState<{
    src: string;
    index: number;
  }>({
    src: "",
    index: 0,
  });

  const setImageHandler = (img: string, i: number): void => {
    setPreview(() => {
      return { index: i, src: img };
    });
  };

  const renderImgs = images?.map((img, i) => (
    <Col
      className={`img-card cursor-pointer ${
        preview.index === i && "active-outline"
      }`}
      key={img}
      onClick={() => setImageHandler(img, i)}
    >
      <img className="img-resize" src={img} alt="thumbnail" />
    </Col>
  ));

  return (
    <Col className="order-2 order-md-1">
      <Row className="flex-column flex-md-row gap-2">
        <Col className="mb-3 mb-md-0">
          <Row className="flex-row flex-md-column gap-2 h-100 px-2 px-md-0">
            {renderImgs}
          </Row>
        </Col>
        <Col md="10" className="rounded-4 overflow-hidden maxh-590">
          <img
            className="img-resize"
            src={images && images[preview.index]}
            alt="preview"
          />
        </Col>
      </Row>
    </Col>
  );
};

export default ImageCard;
