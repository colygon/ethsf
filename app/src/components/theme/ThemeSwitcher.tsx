"use client";
import { useEffect } from "react";
import { useTheme, type Theme } from "@/providers/ThemeProvider";

const themes: { id: Theme; label: string; icon: string }[] = [
  { id: "terminal", label: "Terminal", icon: ">" },
  { id: "neighborhood", label: "Neighborhood", icon: "~" },
  { id: "protocol", label: "Protocol", icon: "<>" },
  { id: "blockparty", label: "Block Party", icon: "#" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "t" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName
        )
      ) {
        const currentIndex = themes.findIndex((t) => t.id === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].id);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme, setTheme]);

  return (
    <div className="flex gap-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`w-8 h-8 rounded flex items-center justify-center text-xs font-[family-name:var(--font-mono)] transition-colors cursor-pointer ${
            theme === t.id
              ? "bg-accent text-bg"
              : "bg-surface text-secondary hover:text-primary border border-border"
          }`}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
