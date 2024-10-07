"use client";
import * as React from "react";
import { Button } from "@hhs/components/shadcn/button";
import { THEME_OPTIONS } from "@hhs/constants/layout";
import { useMounted } from "@hhs/hooks/useMounted";
import { cn } from "@hhs/utils/cn";
import { useTheme } from "next-themes";

interface ThemeButtonProps {
  option: (typeof THEME_OPTIONS)[0];
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ option }) => {
  const { theme, icon: Icon } = option;
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme)}
      className={cn(
        "w-9 h-full rounded-md hover:bg-transparent",
        currentTheme === theme && "border"
      )}
      aria-label={`Switch to ${theme} theme`}
      title={theme}
    >
      <Icon size={16} className="mx-auto" />
    </Button>
  );
};

const ThemeSwitcher: React.FC = () => {
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <div className="border h-10 p-1 rounded-lg inline-flex items-center justify-center shrink-0 gap-1">
      <span className="sr-only">Select theme</span>
      {THEME_OPTIONS.map((option) => (
        <ThemeButton key={option.theme} option={option} />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
