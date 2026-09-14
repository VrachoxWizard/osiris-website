import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Tube from "../assets/3dtube.png";
import Cone from "../assets/3dtriangle.png";
import Capsule from "../assets/3dcapsule.png";

import TextBlock from "../components/TextBlock";
import SvgBlock from "../components/SvgBlock";
import designIcon from "../assets/design.svg";
import developIcon from "../assets/develope.svg";
import supportIcon from "../assets/support.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      const element = ref.current;
      const mq = window.matchMedia("(max-width: 48em)");
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: document.getElementById("services"),
          start: "top top+=180",
          end: "bottom bottom",
          pin: element,
          pinReparent: true,
        },
      });

      t1.fromTo(
        document.getElementById("line"),
        {
          height: "15rem",
        },
        {
          height: "3rem",
          duration: 2,
          scrollTrigger: {
            trigger: document.getElementById("line"),
            start: "top top+=200",
            end: "bottom top+=220",
            scrub: true,
          },
        },
      );

      revealRefs.current.forEach((el, index) => {
        if (mq.matches) {
          t1.from((el.childNodes[0] as Element), {
            x: -300,
            opacity: 0,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true as unknown as number,
            },
          })
            .to((el.childNodes[1] as Element), {
              transform: "scale(0)",
              ease: "power2.inOut",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: (el.childNodes[1] as Element),
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: true as unknown as number,
              },
            })
            .from((el.childNodes[2] as Element), {
              y: 400,
              duration: 2,
              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true as unknown as number,
              },
            })
            .to(el, {
              opacity: 0,
              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            });
        } else {
          t1.from((el.childNodes[0] as Element), {
            x: -300,
            opacity: 0,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true as unknown as number,
            },
          })
            .to((el.childNodes[1] as Element), {
              transform: "scale(0)",
              ease: "power2.inOut",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: (el.childNodes[1] as Element),
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: true as unknown as number,
              },
            })
            .from((el.childNodes[2] as Element), {
              y: 400,
              duration: 2,
              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true as unknown as number,
              },
            })
            .to(el, {
              opacity: 0,
              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            });
        }
      });
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <section
      id="services"
      className="relative flex w-screen flex-col items-center justify-center pt-80"
    >
      <div
        ref={ref}
        className="absolute left-0 top-0 -z-1 flex h-[85vh] w-screen flex-col items-center bg-black bg-[length:auto_100vh] bg-no-repeat"
      >
        <h1 className="title relative mt-4 inline-block text-[2rem] text-white before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-1/2 before:-translate-x-1/2 before:translate-y-2 before:border-b-2 before:border-pink before:content-['']">
          What We Do
        </h1>
        <span
          id="line"
          className="mt-8 h-60 rounded-t-[20px] border-l-4 border-l-background"
        />
        <span
          id="triangle"
          className="h-0 w-0 border-x-[1.2rem] border-t-[2rem] border-x-transparent border-t-background"
        />
      </div>

      <div
        ref={addToRefs}
        className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4"
      >
        <TextBlock
          topic="Design"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              We build award winning Designs
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Tube} alt="Tube Object" />
        </div>
        <SvgBlock src={designIcon} alt="Design" />
      </div>

      <div
        ref={addToRefs}
        className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4"
      >
        <TextBlock
          topic="Develop"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              We Develope high quality Web &amp; App
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              We build appropriate solution to develope your website &amp;
              app with best tools available
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Cone} alt="Cone Object" />
        </div>
        <SvgBlock src={developIcon} alt="Develop" />
      </div>

      <div className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4">
        <TextBlock
          topic="Support"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              We provide support for your digital presence
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              Once your system is online, we will stay on hand to help you
              use it and provide technical support and maintenance <br />{" "}
              your business
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Capsule} alt="Capsule Object" />
        </div>
        <SvgBlock src={supportIcon} alt="Support" />
      </div>
    </section>
  );
};

export default Services;
