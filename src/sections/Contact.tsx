import Facebook from "../assets/facebook-square-brands.svg";
import LinkedId from "../assets/linkedin-brands.svg";
import Twitter from "../assets/twitter-square-brands.svg";
import Instagram from "../assets/instagram-square-brands.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex w-screen flex-col items-center justify-center bg-black py-[calc(2.5rem+2.5vw)]"
    >
      <h1 className="relative mb-12 inline-block text-[2rem] text-white before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-1/2 before:-translate-x-1/2 before:translate-y-2 before:border-b-2 before:border-pink before:content-['']">
        Get in touch
      </h1>
      <div className="mb-12 flex">
        <a href="https://www.facebook.com/" className="mr-8 contact-icon-link">
          <img src={Facebook} alt="Facebook" className="h-12 w-12" />
        </a>
        <a
          href="https://www.linkedin.com//"
          className="mr-8 contact-icon-link"
        >
          <img src={LinkedId} alt="LinkedId" className="h-12 w-12" />
        </a>
        <a href="https://twitter.com/" className="mr-8 contact-icon-link">
          <img src={Twitter} alt="Twitter" className="h-12 w-12" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="contact-icon-link"
        >
          <img src={Instagram} alt="Instagram" className="h-12 w-12" />
        </a>
      </div>
      <form className="flex flex-col justify-center">
        <div className="max-sm:flex max-sm:flex-col">
          <input
            name="name"
            type="text"
            placeholder="your name"
            className="mr-8 mb-4 rounded bg-nav2 px-[calc(0.5rem+1vw)] py-4 text-background placeholder-background/60 focus:bg-nav focus:outline-none max-sm:mr-0"
          />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            className="mb-4 rounded bg-nav2 px-[calc(0.5rem+1vw)] py-4 text-background placeholder-background/60 focus:bg-nav focus:outline-none"
          />
        </div>
        <textarea
          cols={30}
          rows={2}
          placeholder="your message"
          className="mb-8 rounded bg-nav2 px-[calc(0.5rem+1vw)] py-4 text-background placeholder-background/60 focus:bg-nav focus:outline-none"
        />
        <div className="mx-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="cursor-pointer rounded-[20px] bg-white px-8 py-[0.8rem] text-[1.2rem] text-black transition-transform duration-300 hover:scale-110 active:scale-90"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
