import HeroSection from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
