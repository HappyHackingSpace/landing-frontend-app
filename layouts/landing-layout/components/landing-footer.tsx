import { FOOTER } from "@hhs/constants/layout";

function LandingFooter() {
  return (
    <footer>
      <div className="text-slate-400 grow h-10 flex items-center justify-start px-4">
        <p className="text-sm">{FOOTER.copyRight}</p>
      </div>
    </footer>
  );
}

export default LandingFooter;
