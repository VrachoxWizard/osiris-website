interface CardProps {
  name: string;
  text: string;
  image: string;
}

const Card = ({ name, text, image }: CardProps) => {
  return (
    <div className="relative mt-[calc(5rem+5vw)] flex h-[calc(8rem+12vw)] w-[calc(9rem+12vw)] flex-col items-center justify-center rounded-[20px] bg-nav2">
      <img
        src={image}
        alt={name}
        className="absolute bottom-[80%] left-1/2 h-2/5 w-2/5 -translate-x-1/2 rounded-full object-cover object-top drop-shadow-[0px_-3px_3px_var(--color-nav2)]"
      />
      <h4 className="px-[calc(1rem+1vw)] text-center text-[calc(0.6rem+0.5vw)] text-white">
        {text}
      </h4>
      <h3 className="pt-4 text-[calc(0.5rem+1vw)] text-pink">{name}</h3>
    </div>
  );
};

export default Card;
