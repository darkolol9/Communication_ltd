import { useNavigate } from "react-router-dom";

const NavbarItem = ({ url, label, icon = null }) => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar-item nav-item"
      onClick={() => {
        navigate(url);
      }}
    >
      {icon}
      <div className="nav-link">{label}</div>
    </div>
  );
};

export default NavbarItem;
