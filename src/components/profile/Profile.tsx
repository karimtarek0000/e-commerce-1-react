import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import RenderSVG from "../svg/RenderSVG";

function Profile(): JSX.Element {
  return (
    <DropdownButton
      align="end"
      className="d-none d-lg-block"
      title={<RenderSVG className="cursor-pointer" name="profile" />}
    >
      <Dropdown.Item className="d-flex align-items-center" as={Link} to="/">
        <RenderSVG className="me-2" name="settings" size="2rem" />
        Settings
      </Dropdown.Item>
      <Dropdown.Item as={Button}>
        <RenderSVG className="me-2" name="logout" size="2rem" />
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Profile;
