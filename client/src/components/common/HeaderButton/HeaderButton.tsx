import "./HeaderButton.scss";

type HeaderButtonProps = {
  text: string;
  className?: string;
};

const HeaderButton = ({ text, className }: HeaderButtonProps) => {
  return (
    <div className="header-button">
      <h4 className={`header-button__text ${className}`}>{text}</h4>
    </div>
  );
};

export default HeaderButton;
