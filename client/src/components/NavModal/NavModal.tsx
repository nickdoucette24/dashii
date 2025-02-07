import { Link, useNavigate } from "react-router-dom";

import "./NavModal.scss";
import ThemeIcon from "../common/ThemeIcon/ThemeIcon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NavModal = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNavHome = () => {
    navigate("/");
    onClose();
  };

  return (
    <div
      className={`nav-modal__container ${
        isOpen ? "nav-modal__container--visible" : ""
      }`}
      onClick={handleContainerClick}
    >
      <nav className={`nav-modal ${isOpen ? "nav-modal__open" : ""}`}>
        <ul className="nav-modal__list">
          <li className="nav-modal__item" onClick={handleNavHome}>
            <Link to="/" className="nav-modal__link">
              Home
            </Link>
          </li>
          <li className="nav-modal__item">
            <Link to="/overview" className="nav-modal__link">
              Overview
            </Link>
          </li>
          <li className="nav-modal__item">
            <Link to="/features" className="nav-modal__link">
              Features
            </Link>
          </li>
          <li className="nav-modal__item">
            <Link to="/contact" className="nav-modal__link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="nav-theme">
          <ThemeIcon />
        </div>
      </nav>
    </div>
  );
};

export default NavModal;
