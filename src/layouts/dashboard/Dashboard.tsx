import { Outlet } from "react-router";
import Navbar from "../../components/navbar/NavC";

function Dashboard(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Dashboard;
