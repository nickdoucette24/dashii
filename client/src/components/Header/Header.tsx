import { Link } from "react-router-dom";

import Hamburger from "../common/Hamburger/Hamburger";
import HeaderButton from "../common/HeaderButton/HeaderButton";
import MainLogo from "../common/MainLogo/MainLogo";
import ThemeIcon from "../common/ThemeIcon/ThemeIcon";
import HeaderNav from "../HeaderNav/HeaderNav";
import { useTheme } from "../../context";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__hamburger-container">
        <Hamburger />
      </div>
      <Link to="/" className="header__logo-wrapper">
        <MainLogo />
      </Link>
      <div className="header__content">
        <nav className="header__nav-wrapper">
          <HeaderNav />
        </nav>
        <div className="header__settings-wrapper">
          <ThemeIcon />
        </div>
        <div className="header__auth-wrapper">
          <HeaderButton text={"Login"} />
          <HeaderButton
            text={"Get Started"}
            className={"header-button__text--signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
