import clsx from "clsx";
import s from "./Nav-menu.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const NavMenu = () => {
  return (
    <nav className={s.navmenu}>
      <ul className={s.navmenulist}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li className={buildLinkClass}>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
