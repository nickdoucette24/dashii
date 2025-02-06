import "./HeaderButton.scss";

type HeaderButtonProps = {
  text: string;
};

const HeaderButton = ({ text }: HeaderButtonProps) => {
  return (
    <div className="header-button">
      <h4 className="header-button__text">{text}</h4>
    </div>
  );
};

export default HeaderButton;
