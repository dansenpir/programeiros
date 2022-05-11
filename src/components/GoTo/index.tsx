import { useState } from 'react';
import ArrowRight from '../../../public/images/arrow_right.svg';

interface GoTo {
  text: string;
  color: string;
  arrowColor: string;
  hoverColor: string;
  clickedColor: string;
}

const GoTo = ({ text, color, arrowColor, hoverColor, clickedColor }: GoTo) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const hoverHandle = () => setIsHover(true);
  const clickHandle = () => setIsClicked(!isClicked);
  const leaveHandle = () => {
    setIsClicked(false);
    setIsHover(false);
  };
  return (
    <button
      onMouseOver={() => hoverHandle()}
      onMouseLeave={() => leaveHandle()}
      onMouseDown={() => clickHandle()}
      onMouseUp={() => clickHandle()}
      className={`mx-8 md:mx-16 h-12 w-48 border-1 border-${color} p-3 rounded-xl flex items-center justify-center ${
        isHover && `bg-${hoverColor} dark:hover:bg-${hoverColor}`
      }
          ${isClicked && `bg-${clickedColor} dark:focus:bg-${clickedColor}`}`}>
      <p
        className={`mr-3 font-grotesk font-normal text-base ${
          isHover ? 'text-white dark:text-white' : `text-${color}`
        }`}>
        {text}
      </p>
      {isHover || isClicked ? (
        <ArrowRight fill='white' />
      ) : (
        <ArrowRight fill={`${arrowColor}`} />
      )}
    </button>
  );
};

export { GoTo };
