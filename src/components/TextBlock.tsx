import type { ReactNode } from "react";

interface TextBlockProps {
  topic: string;
  title: ReactNode;
  subText: ReactNode;
  children?: ReactNode;
}

const TextBlock = ({ topic, title, subText, children }: TextBlockProps) => {
  return (
    <div
      id="leftBlock"
      className="relative flex w-1/2 flex-col items-start leading-normal text-white max-md:w-full max-md:items-center max-md:text-center"
    >
      <span className="flex items-center justify-center rounded-full bg-nav px-4 py-2 text-[calc(0.4rem+0.4vw)] font-bold text-white max-md:text-[calc(0.4rem+0.8vw)]">
        <span className="mr-2 inline-block h-4 w-4 rounded-full bg-purple" />
        <span>{topic}</span>
      </span>
      <div className="py-2 text-[calc(1rem+1vw)] leading-[1.2] max-md:text-[calc(1rem+1.5vw)]">
        {title}
      </div>
      <div className="text-[calc(0.5rem+0.5vw)] text-white/75 max-md:text-[calc(0.5rem+1vw)]">
        {subText}
      </div>
      {children}
    </div>
  );
};

export default TextBlock;
