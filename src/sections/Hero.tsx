import pinkBlob from "../assets/blob-pink.png";
import purpleBlob from "../assets/blob-purple.png";
import whiteBlob from "../assets/blob-white.png";
import arrow from "../assets/arrow-right.svg";
import Teamwork from "../assets/teamwork.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-[45vw] w-screen justify-center bg-black max-md:block max-md:h-[70vw] max-[420px]:h-auto max-[420px]:pb-8"
    >
      <div className="absolute right-0 w-full max-md:opacity-50">
        <div className="absolute right-0 top-[calc(5rem+5vw)] z-6 w-[calc(15%+15vw)]">
          <img src={pinkBlob} alt="" />
        </div>
        <div className="absolute right-[calc(3.5rem+3.5vw)] top-[calc(2rem+2vw)] z-5 w-[calc(20%+20vw)]">
          <img src={whiteBlob} alt="" />
        </div>
        <div className="absolute right-0 w-[calc(10%+10vw)]">
          <img src={purpleBlob} alt="" />
        </div>
      </div>

      <div className="flex w-[70vw] items-center justify-center max-md:w-screen max-md:flex-col max-md:justify-center">
        <div
          id="leftBlock"
          className="relative z-15 flex w-1/2 flex-col items-start leading-normal text-white max-md:mt-[calc(2.5rem+2.5vw)] max-md:w-4/5 max-md:items-center max-md:justify-around max-md:text-center max-md:drop-shadow-[2px_4px_6px_black] max-sm:drop-shadow-none"
        >
          <span className="flex items-center justify-center rounded-full bg-nav px-4 py-2 text-[calc(0.4rem+0.4vw)] font-bold text-white">
            <span className="mr-2 inline-block h-4 w-4 rounded-full bg-purple" />
            <span>Izrađujemo web</span>
          </span>
          <h1 className="py-2 text-[calc(2rem+1vw)] leading-[1.2]">
            Transformiramo vašu digitalnu prisutnost
          </h1>
          <p className="text-[calc(0.5rem+0.5vw)] text-white/75">
            pomažemo tvrtkama u brzom rastu izraditi nagrađivane web stranice
          </p>
          <button className="mt-4 flex items-center rounded-full bg-white px-4 py-2 text-[calc(0.5rem+0.5vw)] font-bold text-black transition-transform duration-200 hover:scale-110 active:scale-90 max-md:py-[0.2rem]">
            Javite nam se &nbsp;
            <img src={arrow} alt="poziv na akciju" className="w-6" />
          </button>
        </div>

        <img
          src={Teamwork}
          alt="Ilustracija komunikacije i timskog rada u IT-u"
          className="z-7 w-[calc(30%+20vw)] max-w-full animate-[float-y_2.5s_ease_infinite] max-md:absolute max-md:bottom-0 max-md:w-[calc(30%+20vw)] max-md:self-start max-md:opacity-50 max-sm:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
