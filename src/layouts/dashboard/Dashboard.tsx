import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/navbar/NavC";
import Footer from "../../components/footer/Footer";

function Dashboard(): JSX.Element {
  return (
    <>
      <Navbar />

      {/* Pages */}
      <Outlet />

      {/* For scroll */}
      <ScrollRestoration getKey={(location) => location.pathname} />

      <Footer />
    </>
  );
}

export default Dashboard;
