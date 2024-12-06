import clsx from "clsx";
import s from "./Nav-menu.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const NavMenu = () => {
  return (
    <nav className={s.navMenu}>
      <ul className={s.navMenuList}>
        <li className={s.buildLinkClass}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.buildLinkClass}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
