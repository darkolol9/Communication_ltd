import { useNavigate } from "react-router-dom";

const NavbarItem = ({ url, label }) => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar-item"
      onClick={() => {
        navigate(url);
      }}
    >
      {label}
    </div>
  );
};

export default NavbarItem;
