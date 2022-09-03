import Link from 'next/link';
import { useState } from 'react';

interface IUserButton {
  type: 'btn-blue' | 'btn-outline-gray';
  text: string;
}

const UserButton = ({ type, text }: IUserButton) => {
  const [isHover, setIsHover] = useState(false);
  const hoverHandle = () => setIsHover(!isHover);

  if (type === 'btn-blue') {
    return (
      <Link href="/register">
        <a
          className={`py-3.5 rounded-xl text-center font-grotesk cursor-pointer bg-btn-blue text-white hover:bg-btn-blue-hover active:bg-btn-blue-click`}
          onMouseEnter={hoverHandle}
          onMouseLeave={hoverHandle}
        >
          {text}
        </a>
      </Link>
    );
  }

  if (type === 'btn-outline-gray') {
    return (
      <Link href="/login">
        <a
          className={`py-3.5 rounded-xl text-center font-grotesk cursor-pointer border border-btn-gray text-btn-gray hover:bg-btn-gray active:border-btn-gray-click active:bg-btn-gray-click hover:text-white active:text-white`}
          onMouseEnter={hoverHandle}
          onMouseLeave={hoverHandle}
        >
          {text}
        </a>
      </Link>
    );
  }
};

export { UserButton };
