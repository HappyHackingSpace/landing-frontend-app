import LandingFooter from "./components/landing-footer";
import LandingHeader from "./components/landing-header";
import { ChildrenProps } from "@hhs/types/layout-props";

function LandingLayoutView({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col min-h-screen container p-4 md:p-8 lg:px-32 gap-8 md:gap-16">
      <LandingHeader />
      <main className="grow p-2">{children}</main>
      <LandingFooter />
    </div>
  );
}

export default LandingLayoutView;
