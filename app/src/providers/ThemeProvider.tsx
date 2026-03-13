"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "terminal" | "neighborhood" | "protocol" | "blockparty";

const STORAGE_KEY = "ethsf-theme";
const DEFAULT_THEME: Theme = "blockparty";
const VALID_THEMES: Theme[] = ["terminal", "neighborhood", "protocol", "blockparty"];

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: DEFAULT_THEME, setTheme: () => {} });

// Inline script that runs before React hydration to prevent theme flash
const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t&&["terminal","neighborhood","protocol","blockparty"].includes(t)){document.documentElement.setAttribute("data-theme",t)}else{document.documentElement.setAttribute("data-theme","${DEFAULT_THEME}")}}catch(e){document.documentElement.setAttribute("data-theme","${DEFAULT_THEME}")}})()`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved && VALID_THEMES.includes(saved)) {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
