import { useTheme } from "../../../context";
import lightIcon from "../../../assets/icons/light-mode.png";
import darkIcon from "../../../assets/icons/dark-mode.png";
import "./ThemeIcon.scss";

const ThemeIcon = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <img
      className="theme-icon"
      src={theme === "light" ? lightIcon : darkIcon}
      onClick={toggleTheme}
      alt="Toggle theme"
    />
  );
};

export default ThemeIcon;
