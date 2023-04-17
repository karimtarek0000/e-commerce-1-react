import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/navbar/NavC";

function Dashboard(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />

      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
}

export default Dashboard;
