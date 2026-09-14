import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import logo from "../assets/logo.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Header = () => {
  const [click, setClick] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const scrollUp = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id: string, e: React.MouseEvent) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useGSAP(
    () => {
      const element = ref.current;
      const mq = window.matchMedia("(max-width: 40em)");

      if (mq.matches) {
        gsap.to(element, {
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          padding: "1rem 2.5rem",
          borderRadius: "0 0 50px 50px",
          border: "2px solid var(--color-white)",
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "bottom+=200 top",
            end: "+=100",
            scrub: true,
          },
        });
      } else {
        gsap.to(element, {
          position: "fixed",
          top: "1rem",
          left: "3rem",
          right: "3rem",
          padding: "1.5rem 2rem",
          borderRadius: "50px",
          border: "3px solid var(--color-white)",
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "bottom+=300 top",
            end: "+=250",
            scrub: true,
          },
        });
      }
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <header
      ref={ref}
      className="relative z-500 flex items-center justify-between bg-nav px-20 py-4 text-white max-lg:px-12 max-lg:py-2 max-sm:px-6 max-sm:py-2"
    >
      <a href="#home" className="flex cursor-pointer items-center">
        <img src={logo} alt="Osiris" className="mr-3 h-13 w-13" />
        <h3 className="bg-linear-to-r from-pink via-purple to-pink bg-clip-text text-[1.7em] font-display font-bold tracking-[0.12em] text-transparent [text-shadow:0_0_18px_rgba(128,59,236,0.55)]">
          OSIRIS
        </h3>
      </a>
      <nav className="flex w-100 max-w-160 items-center justify-between transition-all duration-300 max-md:hidden">
        <a
          href="#home"
          onClick={(e) => scrollUp("home", e)}
          className="group relative font-semibold leading-normal text-white"
        >
          Početna
          <span className="block h-0.75 w-0 bg-transparent transition-all duration-500 group-hover:w-full group-hover:bg-purple" />
        </a>
        <a
          href="#about"
          onClick={(e) => scrollUp("about", e)}
          className="group relative font-semibold leading-normal text-white"
        >
          O nama
          <span className="block h-0.75 w-0 bg-transparent transition-all duration-500 group-hover:w-full group-hover:bg-purple" />
        </a>
        <a
          href="#services"
          onClick={(e) => scrollUp("services", e)}
          className="group relative font-semibold leading-normal text-white"
        >
          Usluge
          <span className="block h-0.75 w-0 bg-transparent transition-all duration-500 group-hover:w-full group-hover:bg-purple" />
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <button className="cursor-pointer rounded-full bg-purple px-4 py-2 font-semibold text-white transition-all duration-200 hover:scale-110 active:scale-90 max-sm:text-xl max-sm:hover:scale-100 max-sm:active:scale-100">
            Kontakt
          </button>
        </a>
      </nav>
      <button
        onClick={() => setClick(!click)}
        aria-label="Otvori izbornik"
        className="relative hidden h-0.5 w-8 cursor-pointer bg-transparent transition-all duration-300 max-md:inline-block"
      >
        <span
          className={`absolute left-0 inline-block h-0.5 w-8 bg-white transition-all duration-300 ${
            click ? "top-0 rotate-135" : "-top-2 rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 inline-block h-0.5 w-8 bg-white transition-all duration-300 ${
            click ? "top-0 -rotate-135" : "top-2 rotate-0"
          }`}
        />
      </button>
      <nav
        className={`absolute left-0 right-0 top-full -z-10 m-2 hidden flex-col items-center justify-center overflow-x-hidden rounded-[20px] bg-[rgb(53_53_63/95%)] py-8 transition-all duration-500 max-md:flex ${
          click ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleClick("home", e)}
          className="m-6 cursor-pointer text-2xl font-semibold text-white"
        >
          Početna
        </a>
        <a
          href="#about"
          onClick={(e) => handleClick("about", e)}
          className="m-6 cursor-pointer text-2xl font-semibold text-white"
        >
          O nama
        </a>
        <a
          href="#services"
          onClick={(e) => handleClick("services", e)}
          className="m-6 cursor-pointer text-2xl font-semibold text-white"
        >
          Usluge
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <button className="cursor-pointer rounded-full bg-purple px-4 py-2 font-semibold text-white transition-all duration-200">
            Kontakt
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
