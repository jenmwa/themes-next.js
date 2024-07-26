"use client";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const Header = () => {
  return (
    <header className="h-24 w-full bg-slate-300 dark:bg-slate-800 flex justify-between items-center p-4">
      <p className="text-black dark:text-white">Header</p>
      <ThemeToggleButton />
    </header>
  );
};
