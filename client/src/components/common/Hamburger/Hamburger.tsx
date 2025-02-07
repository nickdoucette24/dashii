import { useState } from "react";
import "./Hamburger.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className={`hamburger hamburger--elastic ${isOpen ? "is-active" : ""}`}
      type="button"
      onClick={handleHamburgerClick}
      aria-label="Toggle menu"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
