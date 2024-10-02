import { GradientHeading } from "@hhs/components/custom/gradient-heading";
import { FAQ_ITEMS, MOTION_IMAGES } from "@hhs/constants/home";
import AccordionFaq from "@hhs/pages/home-page/components/accordion-faq";
import AnimatedBenefits from "@hhs/pages/home-page/components/animated-benefits";
import MotionImageWrapper from "@hhs/pages/home-page/components/motion-image-wrapper";

const HomePageView = () => {
  return (
    <div className="space-y-8">
      <section className="grid lg:grid-cols-2 gap-4 items-center">
        <div className="flex max-w-lg flex-col items-center text-center gap-2">
          <GradientHeading>Happy Hacking Space</GradientHeading>
          <p className="block text-xl text-pretty">
            A nonprofit community driven by curiosity and exploration, rejecting
            the myth of scarcity, believing in an economy of abundance through
            collaboration and mutual support, while championing collective
            imagination and creative resilience.
          </p>
        </div>
        <AnimatedBenefits />
      </section>

      <section className="space-y-2">
        <MotionImageWrapper start={0} end={3} />
        <MotionImageWrapper start={3} end={5} className="md:-top-16" />
        <MotionImageWrapper
          start={5}
          end={MOTION_IMAGES.length}
          className="md:-top-32"
        />
      </section>

      <section className="space-y-2">
        <GradientHeading weight="semi" size="lg" className="text-center">
          FAQs
        </GradientHeading>
        <AccordionFaq data={FAQ_ITEMS} />
      </section>
    </div>
  );
};

export default HomePageView;
