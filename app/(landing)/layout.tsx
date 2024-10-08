import LandingLayoutView from "@hhs/layouts/landing-layout";
import { ChildrenProps } from "@hhs/types/layout-props";

export default function LandingLayout({ children }: ChildrenProps) {
  return <LandingLayoutView>{children}</LandingLayoutView>;
}
