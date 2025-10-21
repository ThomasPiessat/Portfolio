import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const getInitial = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    // fallback to system preference
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // help browser styles (scrollbars, form controls)
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
  }, [theme]);

  // Live sync with system preference if user hasn't explicitly chosen:
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const stored = localStorage.getItem("theme");
      if (!stored) setTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme: () => setTheme(t => (t === "dark" ? "light" : "dark")) }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
