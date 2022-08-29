import { useEffect, useState } from 'react';
import Discord from '../../../public/images/discord_icon.svg';
import Github from '../../../public/images/github_icon.svg';
import Telegram from '../../../public/images/telegram_icon.svg';

interface SocialButton {
  type: "telegram" | "discord" | "github";
  hasText: boolean;
}

function SocialButton({ type, hasText }: SocialButton) {
  const [color, setColor] = useState("");
  const [hoverColor, setHoverColor] = useState("");
  const [clickedColor, setClickedColor] = useState("");
  const [url, setUrl] = useState("");
  const [isHover, setIsHover] = useState(false);
  const svgStyles = `fill-current ${!isHover ? `text-${color}` : 'text-white'}`;

  const hoverHandle = () => setIsHover(!isHover);

  useEffect(() => {
    if (type === 'discord') {
      setUrl('https://discord.gg/pDxbmrzNaJ');
      setColor('btn-discord');
      setHoverColor('btn-discord');
      setClickedColor('discord');
    }

    if (type === 'github') {
      setUrl('https://github.com/programeiros');
      setColor('btn-github');
      setHoverColor('btn-github');
      setClickedColor('github');
    }

    if (type === 'telegram') {
      setUrl('https://t.me/+p8PHV0M348k3NjE5');
      setColor('btn-telegram');
      setHoverColor('btn-telegram');
      setClickedColor('telegram');
    }
  }, [type]);

  return (
    <a
      className={`flex items-center justify-center border border-${color} rounded-xl font-grotesk h-12 ${hasText ? 'w-32' : 'w-12'} hover:bg-${hoverColor} dark:hover:bg-${hoverColor} ${isHover && `hover:border-${hoverColor} dark:hover:border-${hoverColor} active:border-${clickedColor} active:bg-${clickedColor} dark:active:bg-${clickedColor}`}`}
      href={url}
      target='_blank'
      rel='noreferrer'
      onMouseEnter={hoverHandle}
      onMouseLeave={hoverHandle}
    >
      {type === 'telegram' && <Telegram className={svgStyles} />}
      {type === 'discord' && <Discord className={svgStyles} />}
      {type === 'github' && <Github className={svgStyles} />}
      {hasText && (
        <span className={`ml-3 capitalize ${isHover ? `text-white` : `text-${color}`}`}>
          {type}
        </span>
      )}
    </a>
  );
}

export { SocialButton };
