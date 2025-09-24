import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeContext.jsx";
import styled from "styled-components";

function ButtonThemeContext() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const themeLabel = isDarkMode ? "Modo claro" : "Modo escuro";
  
  return (
    <ThemeSwitcher 
      onClick={toggleTheme} 
      aria-label={themeLabel}
      aria-pressed={isDarkMode}
    >
      <span>{isDarkMode ? "🌙" : "💡"}</span>
    </ThemeSwitcher>
  );
}

const ThemeSwitcher = styled.button`
  border: none;
  font-size: 2rem; /* Ajustado o tamanho */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; /* Tamanho fixo */
  height: 50px; /* Tamanho fixo */
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    transform: rotate(360deg); /* Efeito de rotação */

    span {
      transform: rotate(-360deg); /* Desfaz a rotação no ícone */
    }
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }
`;

export default ButtonThemeContext;
