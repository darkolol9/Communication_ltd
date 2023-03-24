import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <div className="navbar">
      <div style={{ color: "red", backgroundColor : "white" }}>INSERT A LOGO HERE</div>
      <NavbarItem label="Home" url="/*" />
      <NavbarItem label="Login" url="/login" />
      <NavbarItem label="Register" url="/register" />
      <NavbarItem label="Forgot Password" url="/forgot_password" />
    </div>
  );
};

export default NavBar;
