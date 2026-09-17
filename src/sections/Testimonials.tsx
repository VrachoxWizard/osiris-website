import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Card from "../components/Card";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar4 from "../assets/avatar-4.jpg";

const testimonials = [
  {
    text: "Prije Osirisa nismo imali pojma kako izgleda dobra web stranica. Sad nam klijenti sami kažu da im se svidjela prije nego što nas nazovu.",
    name: "Marko Perić, Perić Obrt",
    image: avatar1,
  },
  {
    text: "Brzo, jasno i bez tehničkog žargona koji ne razumijemo. Točno ono što nam je trebalo za pokretanje online narudžbi.",
    name: "Ana Kovačević, Pekarnica Kovačević",
    image: avatar2,
  },
  {
    text: "Broj upita preko web stranice nam se udvostručio u prva dva mjeseca. Preporučili bismo Osiris svakom malom poduzetniku.",
    name: "Ivan Horvat, Horvat Instalacije",
    image: avatar3,
  },
  {
    text: "Cijeli proces su nam objasnili korak po korak, bez žurbe. Osjećali smo se sigurno iako o web stranicama ne znamo ništa.",
    name: "Petra Novak, Salon Novak",
    image: avatar4,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 28 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h2 className="relative mt-6 inline-block text-[calc(1rem+1.5vw)] text-black before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-1/2 before:-translate-x-1/2 before:translate-y-2 before:border-b-2 before:border-purple before:content-['']">
        Nekoliko lijepih riječi o nama!
      </h2>
      <div className="relative flex w-[50vw] flex-col justify-center max-sm:w-[90vw]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex min-w-0 flex-[0_0_100%] flex-col items-center justify-center"
              >
                <Card
                  text={testimonial.text}
                  name={testimonial.name}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Prethodna preporuka"
          className="absolute -left-3.75 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center text-[1.5rem] text-black max-sm:-left-2"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          aria-label="Sljedeća preporuka"
          className="absolute -right-3.75 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center text-[1.5rem] text-black max-sm:-right-2"
        >
          ›
        </button>

        <div className="mt-6 flex justify-center gap-1">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Prikaži preporuku ${index + 1}`}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span
                className={`h-3 w-3 rounded-full bg-black transition-opacity ${
                  index === selectedIndex ? "opacity-75" : "opacity-25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
