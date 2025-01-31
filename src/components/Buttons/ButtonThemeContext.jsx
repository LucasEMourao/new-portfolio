import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeContext.jsx";
import styled from "styled-components";

function ButtonThemeContext() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <ThemeSwitcher>
      <button onClick={toggleTheme}>{isDarkMode ? "🌙" : "💡"}</button>
    </ThemeSwitcher>
  );
}

const ThemeSwitcher = styled.div`
  button {
    border: none;
    font-size: 36px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
      transition: all 0.3s ease;
    }
  }
`;

export default ButtonThemeContext;
