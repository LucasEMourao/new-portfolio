import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const LightTheme = {
  background: "#F5F5F5",
  color: "#121212",
  primaryColor: "#022d7a", /* Cor primária ajustada para melhor contraste no tema claro */
};

const DarkTheme = {
  background: "#121212",
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  primaryColor: "#033ca5", /* Cor primária no tema escuro */
};

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
