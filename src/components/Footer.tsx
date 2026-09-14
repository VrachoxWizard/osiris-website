import Twitter from "../assets/twitter-square-brands.svg";
import Instagram from "../assets/instagram-square-brands.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-[calc(2.5rem+2.5vw)] py-[1.2rem] text-base max-md:flex-col max-md:items-center">
      <div className="flex items-center">
        Reach out to me via 😉
        <a
          href="https://twitter.com/code_bucks"
          className="footer-icon-link"
        >
          <img
            src={Twitter}
            alt="Twitter"
            className="ml-4 h-6 w-6 invert transition-all duration-200 ease-in-out"
          />
        </a>
        &nbsp;
        <a
          href="https://www.instagram.com/code.bucks/"
          className="footer-icon-link"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="ml-4 h-6 w-6 invert transition-all duration-200 ease-in-out"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
