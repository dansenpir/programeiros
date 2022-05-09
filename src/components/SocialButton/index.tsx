import { useEffect, useState } from 'react';
import Discord from '../../../public/images/discord_icon.svg';
import Github from '../../../public/images/github_icon.svg';
import Telegram from '../../../public/images/telegram_icon.svg';

interface SocialButton {
  text: string;
}

function SocialButton({ text }: SocialButton) {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [link, setLink] = useState('');
  const [color, setColor] = useState('');
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState('');
  const [clickedBackgroundColor, setClickedBackgroundColor] = useState('');
  const hoverHandle = () => setIsHover(true);
  const clickHandle = () => setIsClicked(!isClicked);
  const leaveHandle = () => {
    setIsClicked(false);
    setIsHover(false);
  };

  useEffect(() => {
    if (text.toLowerCase() === 'discord') {
      setLink('https://discord.gg/pDxbmrzNaJ');
      setColor('btn-discord');
      setHoverBackgroundColor('btn-discord');
      setClickedBackgroundColor('discord');
    }
    if (text.toLowerCase() === 'github') {
      setLink('https://github.com/programeiros');
      setColor('btn-github');
      setHoverBackgroundColor('btn-github');
      setClickedBackgroundColor('github');
    }
    if (text.toLowerCase() === 'telegram') {
      setLink('https://t.me/+p8PHV0M348k3NjE5');
      setColor('btn-telegram');
      setHoverBackgroundColor('btn-telegram');
      setClickedBackgroundColor('telegram');
    }
  }, []);

  return (
    <a
      className='mb-14 sm:mb-0 mr-4 sm:mr-8'
      href={link}
      target='_blank'
      rel='noreferrer'>
      <button
        onMouseOver={() => hoverHandle()}
        onMouseLeave={() => leaveHandle()}
        onMouseDown={() => clickHandle()}
        onMouseUp={() => clickHandle()}
        className={`flex items-center justify-center border-1 border-solid border-${color} rounded-xl text-base font-grotesk font-normal leading-5 h-12 w-32 bg-white dark:bg-dark ${
          isHover &&
          `bg-${hoverBackgroundColor} dark:hover:bg-${hoverBackgroundColor}`
        }
          ${
            isClicked &&
            `bg-${clickedBackgroundColor} dark:focus:bg-${clickedBackgroundColor}`
          }`}>
        {text.toLowerCase() === 'discord' ? (
          <Discord
            {...((isHover || isClicked) && {
              fill: 'white',
            })}
          />
        ) : null}
        {text.toLowerCase() === 'github' ? (
          <Github
            {...((isHover || isClicked) && {
              fill: 'white',
            })}
          />
        ) : null}
        {text.toLowerCase() === 'telegram' ? (
          <Telegram
            {...((isHover || isClicked) && {
              fill: 'white',
            })}
          />
        ) : null}
        <p
          className={
            isHover || isClicked
              ? `ml-3 text-white dark:text-white`
              : `ml-3 text-${color} dark:text-${color}`
          }>
          {text}
        </p>
      </button>
    </a>
  );
}

export { SocialButton };
