import { NavLink } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      <h1 className={s.titleHome}>Campers of your dreams</h1>
      <p className={s.descriptionHome}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={s.viewNow} to="/campers">
        View Now
      </NavLink>
    </div>
  );
};
export default Home;
