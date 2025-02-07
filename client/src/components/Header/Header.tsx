import { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "../common/Hamburger/Hamburger";
import HeaderButton from "../common/HeaderButton/HeaderButton";
import MainLogo from "../common/MainLogo/MainLogo";
import ThemeIcon from "../common/ThemeIcon/ThemeIcon";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavModal from "../NavModal/NavModal";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header__hamburger-container">
        <Hamburger isOpen={isOpen} onToggle={handleToggleMenu} />
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
        <div className="header__modal-wrapper">
          <NavModal isOpen={isOpen} onClose={handleToggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
