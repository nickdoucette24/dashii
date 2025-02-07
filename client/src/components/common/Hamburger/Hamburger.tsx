import "./Hamburger.scss";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const Hamburger = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      className={`hamburger hamburger--elastic ${isOpen ? "is-active" : ""}`}
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
