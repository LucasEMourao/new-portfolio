import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const LightTheme = {
  background: "#F5F5F5",
  color: "#121212",
  primaryColor: "#022d7a", /* Cor primária ajustada para melhor contraste no tema claro */
  tokens: {
    color: {
      surface: {
        main: "#F5F5F5",
        card: "rgba(0, 0, 0, 0.03)",
        inverted: "#121212",
      },
      text: {
        main: "#121212",
        secondary: "#555555",
        onPrimary: "#FFFFFF",
      },
      border: {
        subtle: "rgba(0,0,0,0.08)",
        strong: "rgba(0,0,0,0.15)",
      },
      shadow: {
        brand: "#4096cf", // Used in About image
      }
    },
  },
};

const DarkTheme = {
  background: "#121212",
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  primaryColor: "#033ca5", /* Cor primária no tema escuro */
  tokens: {
    color: {
      surface: {
        main: "#121212",
        card: "rgba(255, 255, 255, 0.05)",
        inverted: "#F5F5F5",
      },
      text: {
        main: "#FFFFFF",
        secondary: "#cccccc",
        onPrimary: "#FFFFFF",
      },
      border: {
        subtle: "rgba(255, 255, 255, 0.15)",
        strong: "rgba(255, 255, 255, 0.3)",
      },
      shadow: {
        brand: "#033ca5", // Adjusted for dark mode
      }
    },
  },
};

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
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
