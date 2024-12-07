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
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={buildLinkClass}>
          <NavLink to="/campers" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
