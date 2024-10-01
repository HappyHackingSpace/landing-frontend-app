import { ThemeOptionProps } from "@hhs/types/layout-props";
import {
  Github,
  Instagram,
  Linkedin,
  MonitorSmartphone,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";

export const THEME_OPTIONS: ThemeOptionProps[] = [
  { theme: "light", icon: Sun },
  { theme: "dark", icon: Moon },
  { theme: "system", icon: MonitorSmartphone },
];

export const SOCIAL_LINKS = [
  {
    icon: Twitter,
    href: "https://x.com/happyhackings",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/happyhackingspace",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/happy-hacking-space",
  },
  {
    icon: Github,
    href: "https://github.com/HappyHackingSpace",
  },
];

export const NAV_ITEMS = [
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Shoots",
    href: "/shoots",
  },
];
