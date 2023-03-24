import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavbarItem label="Home" url="/*" />
      <NavbarItem label="Login" url="/login" />
      <NavbarItem label="Register" url="/register" />
      <NavbarItem label="Forgot Password" url="/forgot_password" />
    </div>
  );
};

export default NavBar;
