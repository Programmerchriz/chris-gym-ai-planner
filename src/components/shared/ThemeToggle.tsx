import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") {
      return "light";
    }

    const saved = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (saved) {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";

    setTheme(next);

    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );

    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-border/60
        bg-background/50
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-primary/50
        hover:shadow-md
        hover:cursor-pointer
      "
    >
      <Sun
        className={`
          absolute h-5 w-5 transition-all duration-500
          ${
            theme === "light"
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0"
          }
        `}
      />

      <Moon
        className={`
          absolute h-5 w-5 transition-all duration-500
          ${
            theme === "dark"
              ? "rotate-0 scale-100"
              : "rotate-90 scale-0"
          }
        `}
      />
    </button>
  );
};
