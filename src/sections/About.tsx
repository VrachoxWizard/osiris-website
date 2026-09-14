import wave from "../assets/waves.svg";
import rocket from "../assets/rocket-image.png";
import human from "../assets/human.svg";
import hand from "../assets/hand.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex w-screen flex-col items-center justify-center"
    >
      <img src={wave} alt="" className="absolute -top-4 w-full" />
      <div className="absolute bottom-[-1rem] right-0 max-sm:hidden">
        <img src={hand} alt="" />
      </div>
      <div className="mx-60 mt-60 flex flex-col justify-center max-lg:mx-[calc(5rem+5vw)] max-lg:mt-40 max-sm:m-[3rem_calc(3rem+3vw)] max-sm:items-center">
        <div>
          <h1 className="inline-block text-[2rem]">O nama</h1>
          <div className="h-8 w-28 rounded-[150%/60px_70px_0_0] border-5 border-t-purple border-r-transparent border-b-transparent border-l-transparent" />
        </div>
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="flex w-2/5 animate-[float-xy_2.5s_ease_infinite] justify-center pb-20 max-sm:w-1/2 max-sm:pb-0">
            <img src={rocket} alt="" />
          </div>
          <div className="relative w-1/2 max-sm:w-full">
            <div className="absolute bottom-full right-0 w-1/2 max-sm:hidden">
              <img src={human} alt="" />
            </div>
            <h4 className="text-[calc(0.5rem+1vw)] leading-normal text-nav2">
              Pomažemo klijentima predstaviti sebe, rasti i istaknuti se u
              sve konkurentnijem digitalnom svijetu kroz kreativne projekte
              koji privlače pažnju i uključuju korisnike, stvarajući
              stratešku vrijednost.
            </h4>
            <div>
              <span className="mt-4 mr-2 inline-block h-4 w-4 rounded-full bg-purple" />
              <span className="mt-4 mr-2 inline-block h-4 w-4 rounded-full bg-pink" />
              <span className="mt-4 mr-2 inline-block h-4 w-4 rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
