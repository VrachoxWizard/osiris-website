import SvgIcon from "../assets/arrow-up.svg";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollToTop = () => {
  const ref = useRef<HTMLImageElement>(null);

  const scrollUp = () => {
    const element = document.getElementById("home");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useGSAP(
    () => {
      const element = ref.current;
      gsap.to(element, {
        display: "block",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          scrub: true,
        },
      });
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Povratak na vrh"
      className="fixed bottom-20 right-25 z-10 h-10 w-10 cursor-pointer max-md:hidden"
    >
      <img
        ref={ref}
        src={SvgIcon}
        alt=""
        className="hidden h-12 w-12 rounded-full border-2 border-white bg-white transition-transform duration-300 hover:scale-[1.2] active:scale-90"
      />
    </button>
  );
};

export default ScrollToTop;
