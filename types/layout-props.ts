import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

export interface ThemeOptionProps {
  theme: string;
  icon: ComponentType<LucideProps>;
}
