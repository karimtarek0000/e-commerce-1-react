import { Container } from "react-bootstrap";

import CategoriesList from "../../components/categories/CategoriesList";
import Slider from "../../components/slider/Slider";

function Home() {
  // if (true) return [1, 2, 3, 4].map((sk) => <Skeleton.Category />);

  return (
    <>
      <Slider />
      <h2 className="text-center fs-1 my-5">All Categories</h2>
      <Container className="mt-4">
        <CategoriesList />
      </Container>
    </>
  );
}

export default Home;
