import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import { MOTION_IMAGES } from "@hhs/constants/home";
import MotionImageWrapper from "@hhs/pages/home-page/components/motion-image-wrapper";

const HomePageView = () => {
  return (
    <div>
      <section className="flex items-center justify-center flex-wrap gap-2">
        <div className="flex max-w-lg flex-col items-center gap-2 text-center">
          <GradientHeading>Happy Hacking Space</GradientHeading>
          <p className="block text-xl text-pretty">
            A nonprofit community driven by curiosity and exploration, rejecting
            the myth of scarcity, believing in an economy of abundance through
            collaboration and mutual support, while championing collective
            imagination and creative resilience.
          </p>
        </div>
        <div className="space-y-2">
          <MotionImageWrapper start={0} end={3} />
          <MotionImageWrapper start={3} end={5} className="md:-top-16" />
          <MotionImageWrapper
            start={5}
            end={MOTION_IMAGES.length}
            className="md:-top-32"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePageView;
