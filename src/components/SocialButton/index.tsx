import { useState } from 'react';
import Discord from '../../../public/images/discord_icon.svg';
import Github from '../../../public/images/github_icon.svg';
import Telegram from '../../../public/images/telegram_icon.svg';

interface SocialButton {
  type: 'telegram' | 'discord' | 'github';
<<<<<<< HEAD
  hasText?: boolean;
}

function SocialButton({ type, hasText }: SocialButton) {
  const [isHover, setIsHover] = useState(false);

  const socialMedias = {
    telegram: {
      url: 'https://t.me/+p8PHV0M348k3NjE5',
      color: 'btn-telegram',
      hoverColor: 'btn-telegram',
      clickedColor: 'telegram',
    },
    discord: {
      url: 'https://discord.gg/pDxbmrzNaJ',
      color: 'btn-discord',
      hoverColor: 'btn-discord',
      clickedColor: 'discord',
    },
    github: {
      url: 'https://github.com/programeiros',
      color: 'btn-github',
      hoverColor: 'btn-github',
      clickedColor: 'github',
    },
  };

  const svgStyles = `fill-current ${
    isHover ? 'text-white' : `text-${socialMedias[type].color}`
  }`;

  const hoverHandle = () => setIsHover(!isHover);

  return (
    <a
      className={`flex items-center justify-center border border-${
        socialMedias[type].color
      } rounded-xl font-grotesk h-12 ${hasText ? 'w-32' : 'w-12'} hover:bg-${
        socialMedias[type].hoverColor
      } dark:hover:bg-${socialMedias[type].hoverColor} ${
        isHover &&
        `hover:border-${socialMedias[type].hoverColor} dark:hover:border-${socialMedias[type].hoverColor} active:border-${socialMedias[type].clickedColor} active:bg-${socialMedias[type].clickedColor} dark:active:bg-${socialMedias[type].clickedColor}`
      }`}
      href={socialMedias[type].url}
=======
  hasText: boolean;
}

function SocialButton({ type, hasText }: SocialButton) {
  const [color, setColor] = useState('');
  const [hoverColor, setHoverColor] = useState('');
  const [clickedColor, setClickedColor] = useState('');
  const [url, setUrl] = useState('');
  const [isHover, setIsHover] = useState(false);
  const svgStyles = `fill-current ${!isHover ? `text-${color}` : 'text-white'}`;

  const hoverHandle = () => setIsHover(!isHover);

  useEffect(() => {
    if (type === 'discord') {
      setUrl('https://discord.gg/pDxbmrzNaJ');
      setColor('discord');
      setHoverColor('btn-discord');
      setClickedColor('btn-discord');
    }

    if (type === 'github') {
      setUrl('https://github.com/programeiros');
      setColor('github');
      setHoverColor('btn-github');
      setClickedColor('btn-github');
    }

    if (type === 'telegram') {
      setUrl('https://t.me/+p8PHV0M348k3NjE5');
      setColor('telegram');
      setHoverColor('btn-telegram');
      setClickedColor('btn-telegram');
    }
  }, []);

  return (
    <a
      className={`flex items-center justify-center border border-${color} rounded-xl font-grotesk h-12 ${
        hasText ? 'w-32' : 'w-12'
      } hover:bg-${hoverColor} dark:hover:bg-${hoverColor} ${
        isHover &&
        `hover:border-${hoverColor} dark:hover:border-${hoverColor} active:border-${clickedColor} active:bg-${clickedColor} dark:active:bg-${clickedColor}`
      } mb-14 sm:mb-0 mr-4 sm:mr-8 leading-5`}
      href={url}
>>>>>>> b9238b4 (feat: adds no-text button in SocialButton)
      target="_blank"
      rel="noreferrer"
      onMouseEnter={hoverHandle}
      onMouseLeave={hoverHandle}
    >
      {type === 'telegram' && <Telegram className={svgStyles} />}
      {type === 'discord' && <Discord className={svgStyles} />}
      {type === 'github' && <Github className={svgStyles} />}
      {hasText && (
        <span
          className={`ml-3 capitalize ${
<<<<<<< HEAD
            isHover ? `text-white` : `text-${socialMedias[type].color}`
=======
            isHover ? `text-white` : `text-${color}`
>>>>>>> b9238b4 (feat: adds no-text button in SocialButton)
          }`}
        >
          {type}
        </span>
      )}
    </a>
  );
}

export { SocialButton };
