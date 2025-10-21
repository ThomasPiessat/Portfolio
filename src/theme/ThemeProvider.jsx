import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  accent: "purple",
  toggleTheme: () => {},
  setAccent: () => {},
});

export function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const getInitialAccent = () => localStorage.getItem("accent") || "purple";

  const [theme, setTheme] = useState(getInitialTheme);
  const [accent, setAccent] = useState(getInitialAccent);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("accent", accent);
  }, [accent]);

  // Track system changes only if user hasn't manually chosen a theme
  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    const handler = e => {
      const stored = localStorage.getItem("theme");
      if (!stored) setTheme(e.matches ? "dark" : "light");
    };
    mql?.addEventListener?.("change", handler);
    return () => mql?.removeEventListener?.("change", handler);
  }, []);

  const value = useMemo(() => ({
    theme,
    accent,
    toggleTheme: () => setTheme(t => (t === "dark" ? "light" : "dark")),
    setAccent,
    setTheme,
  }), [theme, accent]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
