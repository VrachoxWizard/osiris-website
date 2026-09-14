interface SvgBlockProps {
  src: string;
  alt: string;
}

const SvgBlock = ({ src, alt }: SvgBlockProps) => {
  return (
    <div
      id="svgBlock"
      className="relative flex w-2/5 items-center justify-center max-md:hidden"
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default SvgBlock;
