import { useState } from 'react';
import Discord from '../../../public/images/discord_icon.svg';
import Github from '../../../public/images/github_icon.svg';
import Telegram from '../../../public/images/telegram_icon.svg';

interface SocialButton {
  type: 'telegram' | 'discord' | 'github';
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

>>>>>>> 9fed5e9 (fix: removes margins and fixes bugs)
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
            isHover ? `text-white` : `text-${socialMedias[type].color}`
          }`}
        >
          {type}
        </span>
      )}
    </a>
  );
}

export { SocialButton };
