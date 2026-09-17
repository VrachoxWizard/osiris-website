import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

import purpleBlob from "../assets/blob-purple.png";
import pinkBlob from "../assets/blob-pink.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NAV_LINKS = [
  { id: "home", label: "Početna" },
  { id: "about", label: "O nama" },
  { id: "services", label: "Usluge" },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    setClick(false);
    scrollUp(id, e);
  };

  useEffect(() => {
    document.body.style.overflow = click ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [click]);

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
          padding: "0.85rem 2.5rem",
          borderRadius: "0 0 16px 16px",
          border: "1px solid rgba(229,161,248,0.18)",
          boxShadow:
            "0 0 40px rgba(128,59,236,0.25), 0 12px 30px rgba(0,0,0,0.35)",
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
          padding: "1rem 2rem",
          borderRadius: "16px",
          border: "1px solid rgba(229,161,248,0.18)",
          boxShadow:
            "0 0 50px rgba(128,59,236,0.25), 0 16px 40px rgba(0,0,0,0.4)",
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

  useGSAP(
    () => {
      if (!click) return;
      const items = menuRef.current?.querySelectorAll("[data-menu-item]");
      if (!items?.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
      );
    },
    { scope: menuRef, dependencies: [click] },
  );

  return (
    <>
      <header
        ref={ref}
        className="relative z-500 flex items-center justify-between bg-linear-to-b from-nav to-black/90 px-20 py-4 text-white backdrop-blur-md max-lg:px-12 max-lg:py-2 max-sm:px-6 max-sm:py-2"
      >
      <div className="relative z-50 flex w-full items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollUp("home", e)}
          className="flex cursor-pointer items-center"
        >
          <h3 className="bg-linear-to-r from-pink via-purple to-pink bg-clip-text text-[1.7em] font-display font-bold tracking-[0.12em] text-transparent [text-shadow:0_0_18px_rgba(128,59,236,0.55)]">
            OSIRIS
          </h3>
        </a>
        <nav className="flex w-100 max-w-160 items-center justify-between transition-all duration-300 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollUp(link.id, e)}
              className="group relative text-[0.8rem] font-medium uppercase leading-normal tracking-[0.15em] text-white"
            >
              {link.label}
              <span className="block h-0.75 w-0 bg-linear-to-r from-pink via-purple to-pink transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
            <button className="cursor-pointer rounded-full bg-linear-to-r from-pink via-purple to-pink px-4 py-2 font-semibold text-white transition-all duration-200 hover:scale-110 hover:shadow-[0_0_35px_rgba(229,161,248,0.35)] active:scale-90 max-sm:text-xl max-sm:hover:scale-100 max-sm:active:scale-100">
              Kontakt
            </button>
          </a>
        </nav>
        <button
          onClick={() => setClick(!click)}
          aria-label={click ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-expanded={click}
          className="relative hidden h-0.5 w-8 cursor-pointer bg-transparent transition-all duration-300 max-md:inline-block"
        >
          <span
            className={`absolute left-0 inline-block h-0.5 w-8 bg-pink transition-all duration-300 ${
              click ? "top-0 rotate-135" : "-top-2 rotate-0"
            }`}
          />
          <span
            className={`absolute left-0 inline-block h-0.5 w-8 bg-purple transition-all duration-300 ${
              click ? "top-0 -rotate-135" : "top-2 rotate-0"
            }`}
          />
        </button>
      </div>
      </header>

      <div
        ref={menuRef}
        inert={!click}
        className={`fixed inset-0 z-40 hidden flex-col items-center justify-center overflow-hidden bg-black transition-opacity duration-500 max-md:flex ${
          click ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <img
          src={purpleBlob}
          alt=""
          className="pointer-events-none absolute -left-20 top-1/4 w-64 opacity-30 blur-2xl"
        />
        <img
          src={pinkBlob}
          alt=""
          className="pointer-events-none absolute -right-16 bottom-1/4 w-56 opacity-25 blur-2xl"
        />

        <nav className="relative flex flex-col items-center gap-2">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.id}
              data-menu-item
              href={`#${link.id}`}
              onClick={(e) => handleClick(link.id, e)}
              className="group flex items-center gap-3 py-3 text-[calc(1.6rem+2vw)] font-medium text-white"
            >
              <span className="inline-block w-6 text-right text-[0.9rem] font-normal text-pink/50">
                0{index + 1}
              </span>
              <span className="relative">
                {link.label}
                <span className="absolute bottom-1 left-0 h-0.75 w-0 bg-linear-to-r from-pink via-purple to-pink transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <a
          data-menu-item
          href="#contact"
          onClick={(e) => handleClick("contact", e)}
          className="mt-10"
        >
          <button className="cursor-pointer rounded-full bg-linear-to-r from-pink via-purple to-pink px-8 py-3 text-lg font-semibold text-white transition-all duration-200 hover:shadow-[0_0_35px_rgba(229,161,248,0.35)] active:scale-95">
            Kontakt
          </button>
        </a>
      </div>
    </>
  );
};

export default Header;
