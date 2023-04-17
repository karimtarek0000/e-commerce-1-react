import { Container } from "react-bootstrap";

import BrandsList from "../../components/brands/BrandsList";
import CategoriesList from "../../components/categories/CategoriesList";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <>
      <Slider />
      <Container className="mt-4">
        <h2 className="text-center fs-1 my-5">All Categories</h2>
        <CategoriesList />
        <br />
        <br />
        <br />
        <h2 className="text-center fs-1 my-5">All Brands</h2>
        <BrandsList />
      </Container>
    </>
  );
}

export default Home;
