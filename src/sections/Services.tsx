import Tube from "../assets/3dtube.png";
import Cone from "../assets/3dtriangle.png";
import Capsule from "../assets/3dcapsule.png";

import TextBlock from "../components/TextBlock";
import SvgBlock from "../components/SvgBlock";
import designIcon from "../assets/design.svg";
import developIcon from "../assets/develope.svg";
import supportIcon from "../assets/support.svg";

const Services = () => {
  return (
    <section
      id="services"
      className="relative flex w-screen flex-col items-center justify-center bg-black pt-80"
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

      <div className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4">
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
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:static max-md:right-auto max-md:top-auto max-md:mt-6 max-md:w-24 max-md:opacity-50">
          <img src={Tube} alt="Objekt u obliku cijevi" />
        </div>
        <SvgBlock src={designIcon} alt="Dizajn" />
      </div>

      <div className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4">
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
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:static max-md:right-auto max-md:top-auto max-md:mt-6 max-md:w-24 max-md:opacity-50">
          <img src={Cone} alt="Objekt u obliku stošca" />
        </div>
        <SvgBlock src={developIcon} alt="Razvoj" />
      </div>

      <div className="relative my-40 mx-40 flex items-center justify-between max-lg:mx-[calc(4rem+5vw)] max-md:block max-md:last:mb-8 max-sm:mx-[calc(2rem+3vw)] max-sm:last:mb-4">
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
        <div className="absolute right-[35%] top-[80%] flex w-[20vw] items-center justify-center max-md:static max-md:right-auto max-md:top-auto max-md:mt-6 max-md:w-24 max-md:opacity-50">
          <img src={Capsule} alt="Objekt u obliku kapsule" />
        </div>
        <SvgBlock src={supportIcon} alt="Podrška" />
      </div>
    </section>
  );
};

export default Services;
