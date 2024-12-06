import { NavLink } from "react-router-dom";
import s from "./Logo.module.css";
import logo from "../../../images/home/logoTravelCamps.png";

const Logo = () => {
  return (
    <NavLink to="/">
      <img className={s.logo} src={logo} alt="logoTravelCamps" />
    </NavLink>
  );
};

export default Logo;
