import { ThunkDispatch } from "@reduxjs/toolkit";
import { MouseEventHandler } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogOut } from "../../store/auth";
import RenderSVG from "../svg/RenderSVG";

function Profile(): JSX.Element {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const logoutHandler: MouseEventHandler = (): void => {
    dispatch(setLogOut());
    navigate("/auth", { replace: true });
    toast.success("GoodBye logout successfully 🥲");
  };

  return (
    <DropdownButton
      align="end"
      title={<RenderSVG className="cursor-pointer" name="profile" />}
    >
      <Dropdown.Item
        className="d-flex align-items-center fs-3 py-4"
        as={Link}
        to="/allorders"
      >
        <RenderSVG className="me-3" name="orders" size="2rem" />
        My Orders
      </Dropdown.Item>
      <Dropdown.Item
        className="d-flex align-items-center fs-3 py-4"
        onClick={logoutHandler}
        as={Button}
      >
        <RenderSVG className="me-3" name="logout" size="2rem" />
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Profile;
