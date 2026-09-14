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

      ScrollTrigger.create({
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
      });

      gsap.fromTo(
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
            scrub: 0.4,
            fastScrollEnd: true,
          },
        },
      );

      revealRefs.current.forEach((el, index) => {
        if (mq.matches) {
          gsap.from((el.childNodes[0] as Element), {
            x: -300,
            opacity: 0,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.to((el.childNodes[1] as Element), {
            scale: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: (el.childNodes[1] as Element),
              start: "top center",
              end: "bottom center",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.from((el.childNodes[2] as Element), {
            y: 400,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.to(el, {
            opacity: 0,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top top+=300",
              end: "center top+=300",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });
        } else {
          gsap.from((el.childNodes[0] as Element), {
            x: -300,
            opacity: 0,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.to((el.childNodes[1] as Element), {
            scale: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: (el.childNodes[1] as Element),
              start: "top center",
              end: "bottom center",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.from((el.childNodes[2] as Element), {
            y: 400,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: 0.4,
              fastScrollEnd: true,
            },
          });

          gsap.to(el, {
            opacity: 0,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top top+=200",
              end: "center top+=300",
              scrub: 0.4,
              fastScrollEnd: true,
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
          Što radimo
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
          topic="Dizajn"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              Izrađujemo nagrađivane dizajne
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              Pomažemo klijentima kreirati odličan dizajn koji privlači više
              kupaca
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Tube} alt="Objekt u obliku cijevi" />
        </div>
        <SvgBlock src={designIcon} alt="Dizajn" />
      </div>

      <div
        ref={addToRefs}
        className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4"
      >
        <TextBlock
          topic="Razvoj"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              Razvijamo kvalitetne web stranice i aplikacije
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              Gradimo prikladna rješenja za razvoj vaše web stranice i
              aplikacije najboljim dostupnim alatima
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Cone} alt="Objekt u obliku stošca" />
        </div>
        <SvgBlock src={developIcon} alt="Razvoj" />
      </div>

      <div
        ref={addToRefs}
        className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4"
      >
        <TextBlock
          topic="Podrška"
          title={
            <h1 className="text-[calc(2rem+2vw)] leading-[1.2] max-md:text-[calc(2rem+3vw)]">
              Pružamo podršku za vašu digitalnu prisutnost
            </h1>
          }
          subText={
            <h5 className="text-[calc(0.417rem+0.417vw)] max-md:text-[calc(0.417rem+0.833vw)]">
              Kada vaš sustav postane dostupan online, ostajemo na
              raspolaganju kako bismo vam pomogli koristiti ga te pružili
              tehničku podršku i održavanje za vaše poslovanje
            </h5>
          }
        />
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:opacity-50">
          <img src={Capsule} alt="Objekt u obliku kapsule" />
        </div>
        <SvgBlock src={supportIcon} alt="Podrška" />
      </div>
    </section>
  );
};

export default Services;
