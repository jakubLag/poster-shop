"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-pink-500" /> : <Moon className="h-5 w-5 text-pink-500" />}
      </Button>
    </div>
  );
}
