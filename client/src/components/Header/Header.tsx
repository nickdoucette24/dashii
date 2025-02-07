import Hamburger from "../common/Hamburger/Hamburger";
import HeaderButton from "../common/HeaderButton/HeaderButton";
import MainLogo from "../common/MainLogo/MainLogo";
import SettingsGear from "../common/SettingsGear/SettingsGear";
import HeaderNav from "../HeaderNav/HeaderNav";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__hamburger-container">
        <Hamburger />
      </div>
      <div className="header__logo-wrapper">
        <MainLogo />
      </div>
      <div className="header__content">
        <div className="header__settings-wrapper">
          <SettingsGear />
        </div>
        <nav className="header__nav-wrapper">
          <HeaderNav />
        </nav>
        <div className="header__auth-wrapper">
          <HeaderButton text={"Login"} />
          <HeaderButton
            text={"Sign Up"}
            className={"header-button__text--signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
