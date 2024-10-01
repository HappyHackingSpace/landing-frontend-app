import { ThemeOptionProps } from "@hhs/types/layout-props";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";

export const THEME_OPTIONS: ThemeOptionProps[] = [
  { theme: "light", icon: Sun },
  { theme: "dark", icon: Moon },
  { theme: "system", icon: MonitorSmartphone },
];
