import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar/NavC";

function Dashboard(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Dashboard;
