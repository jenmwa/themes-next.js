"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

export const ThemeToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded outline bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
