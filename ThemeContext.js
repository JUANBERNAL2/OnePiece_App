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
      backgroundHome: isDarkMode ? "#221f18" : "#F2E8CF",
      backgroundLuffy: isDarkMode ? "#8a2420" : "#ff443d",
      backgroundZoro: isDarkMode ? "#008318" : "#00F52D",
      backgroundNami: isDarkMode ? "#ba4100" : "#FF5900",
      backgroundUssop: isDarkMode ? "#493a2a" : "#947555",
      backgroundSanji: isDarkMode ? "#6f6c03" : "#FAF200",
      backgroundChopper: isDarkMode ? "#750e67" : "#ED1FD1",
      backgroundRobin: isDarkMode ? "#440b5e" : "#B720FE",
      backgroundFranky: isDarkMode ? "#2a414d" : "#558299",
      backgroundBrook: isDarkMode ? "#5f6952" : "#dbfab8",
      text: isDarkMode ? "#FFFFFF" : "#000000",
      card: isDarkMode ? "#1F1F1F" : "#FFFFFF",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
