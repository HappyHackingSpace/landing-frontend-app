import { motion } from "framer-motion";

const useBorderBottomAnimation = (isActive: boolean, id: string) => {
  if (!isActive) return null;

  return (
    <motion.div
      layoutId={id}
      initial={{ y: "calc(100%)" }}
      className="absolute inset-0 top-[calc(100%)] z-20 h-[1px] w-full bg-orange-500"
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    />
  );
};

export default useBorderBottomAnimation;
