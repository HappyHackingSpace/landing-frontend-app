import MotionImageCard from "@hhs/components/custom/motion-image-card";
import { MOTION_IMAGES } from "@hhs/constants/home";
import { cn } from "@hhs/utils/cn";

interface MotionImageWrapperCardsProps {
  start: number;
  end: number;
  className?: string;
}

const MotionImageWrapperCards = (props: MotionImageWrapperCardsProps) => {
  const { start, end, className } = props;

  return (
    <div
      className={cn(
        "relative flex w-full flex-wrap justify-center gap-2 sm:flex-row md:gap-0",
        className
      )}
    >
      {MOTION_IMAGES.slice(start, end).map((img, index) => (
        <MotionImageCard key={index} {...img} />
      ))}
    </div>
  );
};

export default MotionImageWrapperCards;
