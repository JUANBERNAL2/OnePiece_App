// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? "#121212" : "#F2E8CF",
      text: isDarkMode ? "#FFFFFF" : "#000000",
      card: isDarkMode ? "#1F1F1F" : "#FFFFFF",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
