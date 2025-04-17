import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const navLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="movies" className={navLinkClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
