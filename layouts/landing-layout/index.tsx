import LandingFooter from "./components/landing-footer";
import LandingHeader from "./components/landing-header";

const LandingLayoutView = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col min-h-screen max-w-4xl container mx-auto p-4 gap-8">
      <LandingHeader />
      <main className="grow p-4">{children}</main>
      <LandingFooter />
    </div>
  );
};

export default LandingLayoutView;
