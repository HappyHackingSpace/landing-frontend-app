"use client";
import { Button } from "@hhs/components/shadcn/button";
import { THEME_OPTIONS } from "@hhs/constants/layout";
import { useMounted } from "@hhs/hooks/useMounted";
import { useTheme } from "next-themes";
import useBorderBottomAnimation from "@hhs/hooks/useBorderBottomAnimation";

const ThemeSwitcher = () => {
  const mounted = useMounted();
  const { setTheme, theme: currentTheme } = useTheme();

  if (!mounted) return null;

  return (
    <div className="h-10 p-1 rounded-lg inline-flex items-center justify-center shrink-0 gap-1">
      <span className="sr-only">Select theme</span>
      {THEME_OPTIONS.map(({ icon: Icon, theme }) => (
        <Button
          key={theme}
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme)}
          className="relative"
          aria-label={`Switch to ${theme} theme`}
          title={theme}
        >
          <Icon size={16} />

          {useBorderBottomAnimation(currentTheme === theme, "theme-switcher")}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
