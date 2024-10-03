import { BlurFade } from "@hhs/components/custom/blur-fade";
import { SHOOTS } from "@hhs/constants/shoots";
import Image from "next/image";

const ShootsPageView = () => {
  return (
    <section>
      <div className="xs:columns-2 gap-4 lg:columns-3">
        {SHOOTS.map((src, idx) => (
          <BlurFade key={src} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={src}
              alt={`Happy Hacking Space Shoot ${idx + 1}`}
              draggable={false}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ShootsPageView;
