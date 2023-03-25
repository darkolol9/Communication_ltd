import NavbarItem from "./NavbarItem";
import { FaAngellist } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";

import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar nav nav-tabs">
      <Logo />
      <NavbarItem label="Home" url="/" icon={<AiFillHome />} />
      <NavbarItem label="Login" url="/login" icon={<IoMdLogIn />} />
      <NavbarItem label="Register" url="/register" />
      <NavbarItem label="Forgot Password" url="/forgot_password" />
    </div>
  );
};

export default NavBar;
