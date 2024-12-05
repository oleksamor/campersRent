import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import logo from "../../../images/home/logoTravelCamps.png";

const Logo = () => {
  return (
    <NavLink to="/">
      <img className={css.logo} src={logo} alt="logoTravelCamps" />
    </NavLink>
  );
};

export default Logo;
