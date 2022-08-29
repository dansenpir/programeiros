import Link from 'next/link';
import { useState } from 'react';
import ArrowRight from '../../../public/images/arrow_right.svg';

interface GoTo {
  text: string;
  color: string;
  hoverColor: string;
  clickedColor: string;
  url: string;
}

const GoTo = ({ text, color, hoverColor, clickedColor, url }: GoTo) => {
  const [isHover, setIsHover] = useState(false);
  const hoverHandle = () => setIsHover(!isHover);
  return (
    <Link href={url} passHref>
      <a
        className={`inline-flex items-center h-12 px-3 border border-${color} rounded-xl ${isHover && `hover:border-${hoverColor} hover:bg-${hoverColor} dark:hover:bg-${hoverColor} active:border-${clickedColor} active:bg-${clickedColor} dark:active:bg-${clickedColor}`}`}
        onMouseEnter={hoverHandle}
        onMouseLeave={hoverHandle}
      >
        <p
          className={`font-grotesk ${isHover ? 'text-white' : `text-${color}`}`}
        >
          {text}
        </p>
        <ArrowRight
          className={`ml-3 fill-current ${isHover ? 'text-white' : `text-${color}`}`}
        />
      </a>
    </Link>
  );
};

export { GoTo };
