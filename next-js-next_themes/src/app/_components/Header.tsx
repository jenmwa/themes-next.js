"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <header className="h-24 w-full bg-slate-300 dark:bg-slate-800 flex justify-between items-center p-4">
      <p className="text-black dark:text-white">Header</p>
      <Button
        cta={"CHANGE THEME"}
        toggleTheme={toggleTheme}
        fill={theme === "dark" ? "black" : "white"}
      />
    </header>
  );
};
