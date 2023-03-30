import { Outlet } from "react-router";
import NavC from "../../components/navbar/NavC";

function Dashboard(): JSX.Element {
  return (
    <>
      <NavC />
      <Outlet />
    </>
  );
}

export default Dashboard;
