"use client";
import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { DarkModeContext } from "./DarkModeContext";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(DarkModeContext);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <>
      <header className="h-24 w-full bg-slate-300 borde flex justify-between items-center p-4 dark:bg-slate-800">
        <p>Header</p>
        <Button
          cta={isDarkTheme ? "DARK" : "LIGHT"}
          bgColor={isDarkTheme ? "bg-slate-200" : "bg-slate-700"}
          textColor={isDarkTheme ? "text-slate-700" : "text-slate-200"}
          toggleTheme={toggleTheme}
          fill={isDarkTheme ? "black" : "none"}
        ></Button>
      </header>
    </>
  );
};
