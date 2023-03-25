import NavbarItem from "./NavbarItem";
import { FaAngellist } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";

import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar nav nav-tabs">
      <Logo />
      <NavbarItem label="Home" url="/" icon={<AiFillHome />} />
      <NavbarItem label="Login" url="/login" icon={<IoMdLogIn />} />
      <NavbarItem label="Register" url="/register" icon={<MdAccountCircle />} />
      <NavbarItem
        label="Forgot Password"
        url="/forgot_password"
        icon={<BsFillShieldLockFill />}
      />
    </div>
  );
};

export default NavBar;
