import NavbarItem from "./NavbarItem";
import { FaAngellist } from "react-icons/fa";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar nav nav-tabs">
      <Logo />
      <NavbarItem label="Home" url="/" />
      <NavbarItem label="Login" url="/login" />
      <NavbarItem label="Register" url="/register" />
      <NavbarItem label="Forgot Password" url="/forgot_password" />
    </div>
  );
};

export default NavBar;
