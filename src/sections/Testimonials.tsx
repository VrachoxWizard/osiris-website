import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Card from "../components/Card";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar4 from "../assets/avatar-4.jpg";

const testimonials = [
  {
    text: "Osiris has been essential part of our business. I would definetly recommend Osiris. It has been amazing to have them.",
    name: "Jenny (CodeCall)",
    image: avatar1,
  },
  {
    text: "Osiris has been essential part of our business. I would definetly recommend Osiris. It has been amazing to have them.",
    name: "Jenny (CodeCall)",
    image: avatar2,
  },
  {
    text: "Osiris has been essential part of our business. I would definetly recommend Osiris. It has been amazing to have them.",
    name: "Jenny (CodeCall)",
    image: avatar3,
  },
  {
    text: "Osiris has been essential part of our business. I would definetly recommend Osiris. It has been amazing to have them.",
    name: "Jenny (CodeCall)",
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
      <h1 className="relative mt-6 inline-block text-[calc(1rem+1.5vw)] text-black before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-1/2 before:-translate-x-1/2 before:translate-y-2 before:border-b-2 before:border-purple before:content-['']">
        Few good words about us!
      </h1>
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
          aria-label="Previous testimonial"
          className="absolute left-[-25px] top-1/2 -translate-y-1/2 cursor-pointer text-[1.5rem] text-black max-sm:hidden"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 cursor-pointer text-[1.5rem] text-black max-sm:hidden"
        >
          ›
        </button>

        <div className="mt-6 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-3 w-3 rounded-full bg-black transition-opacity ${
                index === selectedIndex ? "opacity-75" : "opacity-25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
