import Logo from "./Logo/Logo";
import s from "./Header.module.css";
import NavMenu from "./Nav-menu/Nav-menu";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Header;
