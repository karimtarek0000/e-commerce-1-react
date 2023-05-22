import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo/Logo";
import RenderSVG from "../svg/RenderSVG";

const Footer = (): JSX.Element => {
  return (
    <footer style={{ backgroundColor: "#f2f2f2" }}>
      <Container>
        <Row className="py-5 mt-5 gap-4 gap-md-0">
          <Col md="4" className="flex-center">
            <Logo />
          </Col>
          <Col md="4" className="flex-center flex-column">
            <h3 className="mb-4 fs-2">Contact us</h3>
            <div className="flex-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <RenderSVG name="facebook" size="3.5rem" />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <RenderSVG name="twitter" size="3.5rem" />
              </a>
            </div>
          </Col>
          <Col md="4" className="flex-center flex-column">
            <h2 className="mb-4 fs-2">Payment method</h2>
            <div className="flex-center gap-4">
              <RenderSVG name="visa" size="4rem" />
              <RenderSVG name="cashe" size="4rem" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
