import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavbarItem label="Login" url="/login" />
      <NavbarItem label="Register" url="/register" />
    </div>
  );
};

export default NavBar;
