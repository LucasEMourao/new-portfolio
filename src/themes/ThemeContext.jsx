import { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import PropTypes from "prop-types";

const THEME_STORAGE_KEY = "lem-theme-mode";

const LightTheme = {
  background: "#F5F5F5",
  color: "#121212",
  primaryColor: "#022d7a",
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
        brand: "#4096cf",
      },
    },
  },
};

const DarkTheme = {
  background: "#121212",
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  primaryColor: "#033ca5",
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
        brand: "#033ca5",
      },
    },
  },
};

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "dark") {
    return true;
  }

  if (storedTheme === "light") {
    return false;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const themeName = isDarkMode ? "dark" : "light";
    const theme = isDarkMode ? DarkTheme : LightTheme;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
    document.documentElement.style.colorScheme = themeName;

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme.background);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeContextProvider };
