"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

const initialValue = { isDarkTheme: false, toggleTheme: () => {} };

export const DarkModeContext = createContext(initialValue);

interface IDarkModeProps {
  children: ReactNode | ReactNode[];
}

const DarkModeProvider = ({ children }: IDarkModeProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isDarkTheme");
      return storedValue === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    console.log("click on btn");
    setIsDarkTheme((prev) => {
      const newValue = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkTheme", newValue.toString());
      }
      return newValue;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
