"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme === "dark") {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      if (isDarkTheme) {
        document.documentElement.classList.add("dark");
        Cookies.set("theme", "dark", { expires: 365, sameSite: "Lax" });
      } else {
        document.documentElement.classList.remove("dark");
        Cookies.set("theme", "light", { expires: 365, sameSite: "Lax" });
      }
    }
  }, [isDarkTheme, isInitialized]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  if (!isInitialized) {
    return null; // Avoid rendering until the theme is initialized
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
