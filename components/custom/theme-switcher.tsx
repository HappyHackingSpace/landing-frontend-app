"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@hhs/components/shadcn/select";
import { THEME_OPTIONS } from "@hhs/constants/layout";
import { useMounted } from "@hhs/hooks/useMounted";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const mounted = useMounted();
  const { setTheme, theme: currentTheme } = useTheme();

  if (!mounted) return null;

  return (
    <Select onValueChange={setTheme} defaultValue={currentTheme}>
      <SelectTrigger className="w-[104px] capitalize">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {THEME_OPTIONS.map(({ theme }) => (
          <SelectItem
            key={theme}
            value={theme}
            className="cursor-pointer capitalize"
            aria-label={`Switch to ${theme} theme`}
          >
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
