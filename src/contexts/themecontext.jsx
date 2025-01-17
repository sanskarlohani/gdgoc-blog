import React, { createContext, useState, useContext, useEffect } from "react";
import { Global } from "@emotion/react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const storedColorMode = localStorage.getItem("colorMode") || "light";

  const [colorMode, setColorMode] = useState(storedColorMode);

  useEffect(() => {
    if (colorMode === "dark") {
      document.body.style.backgroundColor = "#18181a"; 
      document.body.style.color = "white"; 
      document.body.style.scrollbarColor = "#18181a"; 
    } else {
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black"; 
      document.body.style.scrollbarColor = "white"; 
    }

    
    localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
     
      <Global
        styles={{
          body: {
            scrollbarWidth: "thin",
            scrollbarColor:
              colorMode === "light" ? "#c4c6ff #f5f7ff" : "#4e4e4e #121233",
          },
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
};
