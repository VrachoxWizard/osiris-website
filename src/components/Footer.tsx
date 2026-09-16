const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-2 bg-black px-[calc(2.5rem+2.5vw)] py-8 text-center">
      <span className="bg-linear-to-r from-pink via-purple to-pink bg-clip-text font-display text-lg font-bold tracking-[0.12em] text-transparent">
        OSIRIS
      </span>
      <p className="text-sm text-white/40">
        © {year} Osiris. Sva prava pridržana.
      </p>
    </footer>
  );
};

export default Footer;
