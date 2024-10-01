import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

export type ChildrenProps = Readonly<{
  children: React.ReactNode;
}>;

export interface ThemeOptionProps {
  theme: string;
  icon: ComponentType<LucideProps>;
}
